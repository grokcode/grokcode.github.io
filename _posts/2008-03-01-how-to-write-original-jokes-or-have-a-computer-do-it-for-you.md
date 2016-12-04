---
id: 12
title: How to Write Original Jokes (Or Have A Computer Do It For You)
date: 2008-03-01T22:30:16+00:00
author: Jess Johnson
layout: post
description: >
  Generate your own jokes with a Common Lisp joke generator. Includes code walkthrough.
permalink: /12/how-to-write-original-jokes-or-have-a-computer-do-it-for-you/
categories:
  - Fun Projects
tags:
  - jokes
  - lisp
---
This is a Common Lisp code walkthrough for generating original jokes. You seed the generator with knowledge about different objects, and it uses that vocabulary to generate unique jokes. All of the jokes are of the form: &#8220;What do you get when you cross X with Y?&#8221; This code was originally written for my CS288: An AI Approach to Natural Language Processing class at UC Berkeley in 2004.<!--more-->

## The Setup

The joke generator is written in Common Lisp. To compile the code and generate your own jokes, you will need to get a compiler. Download and install the [trial version of Allegro CL](http://www.franz.com/downloads/allegrodownload.lhtml "Allegro CL"). Next get the [jokes.lisp code on GitHub](http://github.com/grokcode/Joke-Generator/).

## Running the Joke Generator

`(generate)` will cycle through the vocabulary and try to make a joke for each set of words. If it finds what it thinks is a good joke, it will print it. It is recommended that `joke.lisp` be compiled as `(generate)` is computationally intensive.

```lisp
;; iterates through the vocabulary, tries to answer a joke for each pair of vocabulary words
(defun generate ()
  (cond (*test-know* (seed-knowledge-test))
	(t (seed-knowledge)))
  ; answer jokes for M_1 N_1, M_2 N_2 pairs, where N is a noun, M is a modifier N_1 != N_2
  ; modifiers may be null
  (do* ((literals (cdr *literal-list*) (cdr literals))
	(word1 (car literals) (car literals)))
       ((null (cdr literals))) ; break condition
       (cond ((is-POS 'n (gethash word1 *vocab*))
	      (dolist (word2 (cdr literals))
		      (cond ((is-POS 'n (gethash word2 *vocab*))
			     (do* ((literals-m (append *literal-list* (list nil)) (cdr literals-m))
				   (mod1 (car literals-m) (car literals-m)))
				  ((null (cdr literals-m))) ; break condition
				  (cond ((and (or (null mod1) (is-POS 'm (gethash mod1 *vocab*)))
					      (anim-match word1 mod1))  ; animated qualities have to match -- "serious lemon" is not allowed
					 (dolist (mod2 (append (cdr *literal-list*) (list nil)))
						 (cond ((and (or (null mod2) (is-POS 'm (gethash mod2 *vocab*)))
							     (anim-match word2 mod2)) ; animated qualitites
							(let ((answer (answer-joke word1 word2 mod1 mod2)))
                              (cond (answer (print-joke word1 word2 mod1 mod2 answer)))))))))))))))))
```


`(answer-joke word1 word2 mod1 mod2)` will try to answer the joke &#8220;What do you get when you cross <mod1> <word1> with <mod2> <word2>?&#8221; mod1 and/or mod2 may be `nil`. In order for this to work, `*vocab*` must be initialized with `(seed-knowledge)`. `(generate)` does this automatically.

## Yeah, but how does it make the jokes?

This is the job of `(answer-joke)`.

```lisp
;; returns a string that will answer the joke, if possible
;; word1 and word2 are strings
;; mod1 and mod2 are strings or nil if no modifier
(defun answer-joke (word1 word2 mod1 mod2)

  (let ((derive-word1 (derive-words word1))
	(derive-word2 (derive-words word2))
	(derive-mod1 (derive-words mod1))
	(derive-mod2 (derive-words mod2))
	(answer nil)
	(answer-val 0)   ; heuristic for how good the joke is -- funniest is 10
	(threshold 5))   ; jokes with answer-val strictly less than threshold aren't considered funny, and won't be returned

    (cond (*debug* (format t "answer-joke: ~O ~O and ~O ~O~%" mod1 word1 mod2 word2)))
           ; no modifiers
    (cond ((and (null mod1) (null mod2))
	   (dolist (d1 derive-word1)
		   (dolist (d2 derive-word2)
			   (let ((a (make-compound (word-prop-literal d1) (word-prop-literal d2))))
			     (cond (a (cond ((is-POS 'm a)
					     (setq answer (format nil "I don't know, but it's ~O" (word-prop-literal a))))
					    ((is-POS 'n a)
					     (setq answer (word-prop-literal a))))
				      (setq answer-val 10))))  ; found answer with N compound

			   (cond ((and (> 8 answer-val) (>= 8 threshold)
				       (member (word-prop-literal d1) (mapcar 'word-prop-literal (word-prop-homophone d2)) :test 'string-equal))
				  (let ((ans-prop (cond ((is-POS 'x d1) d1)
							((is-POS 'x d2) d2)
							((is-POS 'b d1) d1)
							((is-POS 'b d2) d2)
							((is-POS 'm d1) d1)
							((is-POS 'm d2) d2)
							(t d1)))
					(ans-phrase (cond ((or (is-POS 'm d1) (is-POS 'm d2)) 'm))))
				    (cond (ans-phrase (setq answer (format nil "I don't know, but it's ~O" (word-prop-literal ans-prop))))
					  (t (setq answer (word-prop-literal ans-prop)))))
				  (setq answer-val 8)))))           ; found an answer where the 2 derived words are a homophone pair

	   (cond ((and (> 3 answer-val) (>= 3 threshold))
		  (setq answer (make-substring-word word1 word2 :POS 'n))
		  (cond (answer (setq answer-val 3)))))  ; found answer N with a substring match

	   (cond ((and (> 3 answer-val) (>= 3 threshold))
		  (dolist (d1 derive-word1)
			  (dolist (d2 derive-word2)
				  (cond ((and (is-POS 'm d1) (is-POS 'n d2))
					 (setq answer (format nil "~O ~O" (word-prop-literal d1) (word-prop-literal d2)))
					 (setq answer-val 3))
					((and (is-POS 'm d2) (is-POS 'n d1))
					 (setq answer (format nil "~O ~O" (word-prop-literal d2) (word-prop-literal d1)))
					 (setq answer-val 3))))))))  ; found answer with an MN
	  ; 1 modifier
	  ((or (null mod2) (null mod1))

	   (cond ((null mod1)
		  (let ((tmp nil))
		    (setq tmp mod1) (setq mod1 mod2) (setq mod2 tmp)
		    (setq tmp word1) (setq word1 word2) (setq word2 tmp)
		    (setq tmp derive-mod1) (setq derive-mod1 derive-mod2) (setq derive-mod2 tmp)
		    (setq tmp derive-word1)(setq derive-word1 derive-word2) (setq derive-word2 tmp))))

	   (cond ((and (> 7 answer-val) (>= 7 threshold))
		  (dolist (d derive-word2)
			  (dolist (d-word (append (cond ((gethash word1 *vocab*) (list (gethash word1 *vocab*))))
						  derive-word1))
				  (cond ((make-compound (word-prop-literal d) (word-prop-literal d-word))
					 (dolist (d-mod (append (cond ((gethash mod1 *vocab*) (list (gethash mod1 *vocab*))))
								derive-mod1))
						 (cond ((make-compound (word-prop-literal d) (word-prop-literal d-mod))
							(let ((a1 (make-compound (word-prop-literal d) (word-prop-literal d-word)))
							      (a2 (make-compound (word-prop-literal d) (word-prop-literal d-mod))))
							  (cond ((and (is-POS 'm a1) (is-POS 'n a2))
								 (setq answer (format nil "~O ~O" (word-prop-literal a1) (word-prop-literal a2)))
								 (setq answer-val 8))
								((and (is-POS 'm a2) (is-POS 'n a1))
								 (setq answer (format nil "~O ~O" (word-prop-literal a2) (word-prop-literal a1)))
								 (setq answer-val 8))
								((and (is-POS 'm a1) (is-POS 'm a2))
								 (setq answer (format nil "I don't know, but it's ~O and ~O"
										      (word-prop-literal a1) (word-prop-literal a2)))
								 (setq answer-val 8))
								((and (is-POS 'n a1) (is-POS 'n a2))
								 (setq answer (format nil "~O and ~O" (word-prop-literal a1) (word-prop-literal a2)))
								 (setq answer-val 8))))))))))))))

	  ; 2 modifiers
	  (t
	   (let ((a1 (make-substring-word word1 word2 :POS 'm))
		 (a2 (make-substring-word mod1 mod2 :POS 'n)))
	     (cond ((and a1 a2 (anim-match (gethash a1 *vocab*) (gethash a2 *vocab*))
			 (<= (length word1) (length word2)) (<= (length mod1) (length mod2)))
		    (setq answer (format nil "~O ~O" a1 a2))
		    (setq answer-val 8))))  ; made M N, both formed with substrings

	   (cond ((and (> 8 answer-val) (>= 8 threshold))
		  (let ((a1 (make-substring-word word1 word2 :POS 'n))
			(a2 (make-substring-word mod1 mod2 :POS 'm)))
		    (cond ((and a1 a2 (anim-match (gethash a1 *vocab*) (gethash a2 *vocab*))
				(<= (length word1) (length word2)) (<= (length mod1) (length mod2)))
			   (setq answer (format nil "~O ~O" a2 a1))
			   (setq answer-val 8))))))  ; made M N, both formed with substrings

	   (cond ((and (> 8 answer-val) (>= 8 threshold))
		  (let ((ans-list1 nil)
			(ans-list2 nil))
		    (dolist (d derive-word1)
			    (dolist (m derive-mod1)
				    (setq ans-list1 (append ans-list1 (let ((tmp (make-compound (word-prop-literal d) (word-prop-literal m))))
									(cond (tmp (list tmp))))))))
		    (dolist (d derive-word2)
			    (dolist (m derive-mod2)
				    (setq ans-list2 (append ans-list2 (let ((tmp (make-compound (word-prop-literal d) (word-prop-literal m))))
								       (cond (tmp (list tmp))))))))
		    (cond ((and ans-list1 ans-list2)

			   (dolist (a1 ans-list1)
				   (dolist (a2 ans-list2)
					   (cond ((and (is-POS 'm a1) (is-POS 'm a2))
						  (setq answer (format nil "I don't know, but its ~O and ~O"
								       (word-prop-literal a1) (word-prop-literal a2)))
						  (setq answer-val 8))
						 ((and (is-POS 'n a1) (is-POS 'm a2) (anim-match a1 a2))
						  (setq answer (format nil "~O ~O" (word-prop-literal a2) (word-prop-literal a1)))
						  (setq answer-val 8))
						 ((and (is-POS 'm a1) (is-POS 'n a2) (anim-match a1 a2))
						  (setq answer (format nil "~O ~O" (word-prop-literal a1) (word-prop-literal a2)))
						  (setq answer-val 8))))))))))))

    ; the joke loses "funny points" if the answer and question contain the same word
    (cond ((substring word1 answer)
	   (setq answer-val (- answer-val 4))))
    (cond ((substring word2 answer)
	   (setq answer-val (- answer-val 4))))
    (cond ((substring mod1 answer)
	   (setq answer-val (- answer-val 4))))
    (cond ((substring mod2 answer)
	   (setq answer-val (- answer-val 4))))

  ; it also loses points if the punchline has been used before
    (cond ((gethash answer *punchline*)
	   (setq answer-val (- answer-val (* 4 (gethash answer *punchline*))))))

  ; only return joke if it is funny enough
    (cond ((>= answer-val threshold)
	   (add-punchline answer) ; record the punchline so it is less likely to be used again

	   (cond ((not (null mod1)) ; record the elements of the question so we don't get more jokes with the question and the punchline switched
		  (add-punchline (format nil "~O ~O" mod1 word1))))
	   (cond ((not (null mod2))
		  (add-punchline (format nil "~O ~O" mod2 word2))))

       answer))))
```

It uses transformations of the input words to come up with an answer. Each word in the vocabulary contains information about relations with other words, homophones, and part of speech. The transformations it uses are: substitution of a related word, concatenation to form known compound words or phrases, substitution of a homophone, substring manipulation, and adding common suffixes. Each joke may use one or more of these transformations.

When a joke is found, it is given a rating between 1 and 10, depending on the transformations that were used to create the joke. Jokes can loose points if a similar joke has already been printed, or if the same words occur in the question and the answer. If the final rating is greater than the joke threshold, the joke is printed.

## What about the Vocabulary?

The vocabulary is created in `(seed-knowledge)`.

The vocabulary only contains about 200 words. Due to the information needed about each word, the vocabulary had to be created by hand, instead of using a dictionary. The `*vocab*` hashtable stores word-prop structs keyed by the vocabulary word. The word-prop structs contain part of speech, a relations list, a homophones list, and information about article usage and animation.

Part of speech values can be:
  
&#8216;n (noun)
  
&#8216;m (modifier)
  
&#8216;b (both noun and modifier)
  
&#8216;x (none)

The none tag is used for words that aren&#8217;t really nouns or modifiers, but can potentially make up an answer. For example, &#8220;mew&#8221; (the noise a cat makes) has `POS` `'x`.

Relations are simply the declaration that one word is related to another somehow. Two words in a relation could be synonyms (rabbit and hare), &#8220;is a&#8221; relations (aunt and relative), or important characteristics (cheetah and fast). No information is stored about what kind of relation it is. This is an area for improvement.

```lisp
(add-relation "cheetah" "fast" :POS2 'm :anim1 't :anim2 't)
(add-relation "cheetah" "spots" :anim1 't)
(add-relation "elephant" "trunk" :anim1 't)
(add-relation "grave" "serious" :POS1 'b :POS2 'm :anim1 't :anim2 't)
(add-relation "thief" "robber" :anim1 't :anim2 't)
```

The homophones list stores word-prop structs that sound like the word. For example, word-props for &#8220;hair&#8221; and &#8220;hare.&#8221;

```lisp
(add-homophone "cereal" "serial" :POS2 'm)
(add-homophone "hare" "hair" :anim1 't :art2 'f)
```

Article usage `(art)` values can be either `'t` (true) or `'f` (false).

Each word can also be animate, inanimate, or both. Animate nouns are people, animals, etc. Animate modifiers are modifiers that can be applied to animate nouns. This distinction prevents the use of phrases like &#8220;excited rain&#8221; while allowing &#8220;excited dog.&#8221;

To create the vocabulary, I first started by adding words, relations, and homophones that create known jokes. After testing that the generator could produce jokes if given this information, I added additional words that are related to known words, homophones of known words, and compound words containing known words.

To create your own original jokes, replace the vocabulary in `(seed-knowledge)` with your own relations, homophones, and words.

## Improvements

There are a few areas that could be improved.

First, expand the scope of relationships between words with semantic knowledge. As mentioned earlier, it would be useful to know that &#8220;sour rain&#8221; is not a good phrase, but &#8220;sour lemon&#8221; is. It would also be useful to make distinctions between the different types of relations that can occur between words, and to be able to express the idea that the combination of two words can result in another word or phrase based on semantic information.

Second, more complete phonetic information. Some transformations rely on substitutions made by partial homophones. For example &#8220;mew&#8221; (the noise a cat makes) is phonetically similar to the &#8220;mu&#8221; in music, but it different from the &#8220;mu&#8221; in murderer. There is currently no way to express this difference.

Third, more complete vocabulary. The vocabulary is somewhat contrived. A more telling test of the joke generator would be to import the vocabulary from an unbiased source. A more complex part of speech identifier could also be implemented.

## So what jokes did it make?

Here is a list of a few of the jokes that the generator came up with.

WHAT DO YOU GET WHEN YOU CROSS A PORT WITH FROSTED FLAKES?
  
I don&#8217;t know, but it&#8217;s serial

WHAT DO YOU GET WHEN YOU CROSS A DANCE WITH A LEMON?
  
sour balls

WHAT DO YOU GET WHEN YOU CROSS A DANCE WITH A CHEETAH?
  
fastball

WHAT DO YOU GET WHEN YOU CROSS A POPPY WITH ELECTRICITY?
  
flower power

WHAT DO YOU GET WHEN YOU CROSS AN ALIEN WITH A CHICKEN?
  
eggs-traterrestrial

WHAT DO YOU GET WHEN YOU CROSS A SERIOUS THIEF WITH A WET JACKET?
  
grave robber with raincoat

