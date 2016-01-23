---
id: 12
title: How to Write Original Jokes (Or Have A Computer Do It For You)
date: 2008-03-01T22:30:16+00:00
author: Jess Johnson
layout: post
guid: http://grok-code.com/12/how-to-write-original-jokes-or-have-a-computer-do-it-for-you/
permalink: /12/how-to-write-original-jokes-or-have-a-computer-do-it-for-you/
wp_jd_bitly:
  - http://bit.ly/aDGnxb
wp_jd_target:
  - http://grok-code.com/grokcode-dev/12/how-to-write-original-jokes-or-have-a-computer-do-it-for-you/
jd_tweet_this:
  - 
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

<pre><code style="language-lisp">;; iterates through the vocabulary, tries to answer a joke for each pair of vocabulary words
(defun generate ()
  (cond (*test-know* (seed-knowledge-test))
	(t (seed-knowledge)))
  ; answer jokes for M_1 N_1, M_2 N_2 pairs, where N is a noun, M is a modifier N_1 != N_2
  ; modifiers may be null
  (do*&lt;a href="#footnote_0_12" id="identifier_0_12" class="footnote-link footnote-identifier-link" title="literals (cdr *literal-list*) (cdr literals">1&lt;/a>
	(word1 (car literals) (car literals)))
      &lt;a href="#footnote_1_12" id="identifier_1_12" class="footnote-link footnote-identifier-link" title="null (cdr literals">2&lt;/a>) ; break condition
       (cond&lt;a href="#footnote_2_12" id="identifier_2_12" class="footnote-link footnote-identifier-link" title="is-POS &#039;n (gethash word1 *vocab*">3&lt;/a>
	      (dolist (word2 (cdr literals))
		      (cond&lt;a href="#footnote_3_12" id="identifier_3_12" class="footnote-link footnote-identifier-link" title="is-POS &#039;n (gethash word2 *vocab*">4&lt;/a>
			     (do*&lt;a href="#footnote_4_12" id="identifier_4_12" class="footnote-link footnote-identifier-link" title="literals-m (append *literal-list* (list nil">5&lt;/a> (cdr literals-m))
				   (mod1 (car literals-m) (car literals-m)))
				 &lt;a href="#footnote_5_12" id="identifier_5_12" class="footnote-link footnote-identifier-link" title="null (cdr literals-m">6&lt;/a>) ; break condition
				  (cond&lt;a href="#footnote_6_12" id="identifier_6_12" class="footnote-link footnote-identifier-link" title="and (or (null mod1) (is-POS &#039;m (gethash mod1 *vocab*">7&lt;/a>)
					      (anim-match word1 mod1))  ; animated qualities have to match -- "serious lemon" is not allowed
					 (dolist (mod2 (append (cdr *literal-list*) (list nil)))
						 (cond&lt;a href="#footnote_7_12" id="identifier_7_12" class="footnote-link footnote-identifier-link" title="and (or (null mod2) (is-POS &#039;m (gethash mod2 *vocab*">8&lt;/a>)
							     (anim-match word2 mod2)) ; animated qualitites
							(let&lt;a href="#footnote_8_12" id="identifier_8_12" class="footnote-link footnote-identifier-link" title="answer (answer-joke word1 word2 mod1 mod2">9&lt;/a>)
							  (cond (answer (print-joke word1 word2 mod1 mod2 answer)))))))))))))))))</code></pre>

`(answer-joke word1 word2 mod1 mod2)` will try to answer the joke &#8220;What do you get when you cross <mod1> <word1> with <mod2> <word2>?&#8221; mod1 and/or mod2 may be `nil`. In order for this to work, `*vocab*` must be initialized with `(seed-knowledge)`. `(generate)` does this automatically.

## Yeah, but how does it make the jokes?

This is the job of `(answer-joke)`.

<pre line="42"><code class="language-lisp">;; returns a string that will answer the joke, if possible
;; word1 and word2 are strings
;; mod1 and mod2 are strings or nil if no modifier
(defun answer-joke (word1 word2 mod1 mod2)

  (let&lt;a href="#footnote_9_12" id="identifier_9_12" class="footnote-link footnote-identifier-link" title="derive-word1 (derive-words word1">10&lt;/a>
	(derive-word2 (derive-words word2))
	(derive-mod1 (derive-words mod1))
	(derive-mod2 (derive-words mod2))
	(answer nil)
	(answer-val 0)   ; heuristic for how good the joke is -- funniest is 10
	(threshold 5))   ; jokes with answer-val strictly less than threshold aren't considered funny, and won't be returned

    (cond (*debug* (format t "answer-joke: ~O ~O and ~O ~O~%" mod1 word1 mod2 word2)))
           ; no modifiers
    (cond&lt;a href="#footnote_10_12" id="identifier_10_12" class="footnote-link footnote-identifier-link" title="and (null mod1) (null mod2">11&lt;/a>
	   (dolist (d1 derive-word1)
		   (dolist (d2 derive-word2)
			   (let&lt;a href="#footnote_11_12" id="identifier_11_12" class="footnote-link footnote-identifier-link" title="a (make-compound (word-prop-literal d1) (word-prop-literal d2">12&lt;/a>))
			     (cond (a (cond&lt;a href="#footnote_12_12" id="identifier_12_12" class="footnote-link footnote-identifier-link" title="is-POS &#039;m a)
					     (setq answer (format nil "I don&#039;t know, but it&#039;s ~O" (word-prop-literal a">13&lt;/a>))
					   &lt;a href="#footnote_13_12" id="identifier_13_12" class="footnote-link footnote-identifier-link" title="is-POS &#039;n a)
					     (setq answer (word-prop-literal a">14&lt;/a>))
				      (setq answer-val 10))))  ; found answer with N compound

			   (cond&lt;a href="#footnote_14_12" id="identifier_14_12" class="footnote-link footnote-identifier-link" title="and (&gt; 8 answer-val) (&gt;= 8 threshold)
				       (member (word-prop-literal d1) (mapcar &#039;word-prop-literal (word-prop-homophone d2">15&lt;/a> :test 'string-equal))
				  (let&lt;a href="#footnote_15_12" id="identifier_15_12" class="footnote-link footnote-identifier-link" title="ans-prop (cond ((is-POS &#039;x d1) d1)
							((is-POS &#039;x d2) d2)
							((is-POS &#039;b d1) d1)
							((is-POS &#039;b d2) d2)
							((is-POS &#039;m d1) d1)
							((is-POS &#039;m d2) d2)
							(t d1">16&lt;/a>)
					(ans-phrase (cond&lt;a href="#footnote_16_12" id="identifier_16_12" class="footnote-link footnote-identifier-link" title="or (is-POS &#039;m d1) (is-POS &#039;m d2">17&lt;/a> 'm))))
				    (cond (ans-phrase (setq answer (format nil "I don't know, but it's ~O" (word-prop-literal ans-prop))))
					  (t (setq answer (word-prop-literal ans-prop)))))
				  (setq answer-val 8)))))           ; found an answer where the 2 derived words are a homophone pair

	   (cond&lt;a href="#footnote_17_12" id="identifier_17_12" class="footnote-link footnote-identifier-link" title="and (&gt; 3 answer-val) (&gt;= 3 threshold">18&lt;/a>
		  (setq answer (make-substring-word word1 word2 :POS 'n))
		  (cond (answer (setq answer-val 3)))))  ; found answer N with a substring match

	   (cond&lt;a href="#footnote_18_12" id="identifier_18_12" class="footnote-link footnote-identifier-link" title="and (&gt; 3 answer-val) (&gt;= 3 threshold">19&lt;/a>
		  (dolist (d1 derive-word1)
			  (dolist (d2 derive-word2)
				  (cond&lt;a href="#footnote_19_12" id="identifier_19_12" class="footnote-link footnote-identifier-link" title="and (is-POS &#039;m d1) (is-POS &#039;n d2">20&lt;/a>
					 (setq answer (format nil "~O ~O" (word-prop-literal d1) (word-prop-literal d2)))
					 (setq answer-val 3))
					((and (is-POS 'm d2) (is-POS 'n d1))
					 (setq answer (format nil "~O ~O" (word-prop-literal d2) (word-prop-literal d1)))
					 (setq answer-val 3))))))))  ; found answer with an MN
	  ; 1 modifier
	 &lt;a href="#footnote_20_12" id="identifier_20_12" class="footnote-link footnote-identifier-link" title="or (null mod2) (null mod1">21&lt;/a>

	   (cond&lt;a href="#footnote_21_12" id="identifier_21_12" class="footnote-link footnote-identifier-link" title="null mod1)
		  (let ((tmp nil">22&lt;/a>
		    (setq tmp mod1) (setq mod1 mod2) (setq mod2 tmp)
		    (setq tmp word1) (setq word1 word2) (setq word2 tmp)
		    (setq tmp derive-mod1) (setq derive-mod1 derive-mod2) (setq derive-mod2 tmp)
		    (setq tmp derive-word1)(setq derive-word1 derive-word2) (setq derive-word2 tmp))))

	   (cond&lt;a href="#footnote_22_12" id="identifier_22_12" class="footnote-link footnote-identifier-link" title="and (&gt; 7 answer-val) (&gt;= 7 threshold">23&lt;/a>
		  (dolist (d derive-word2)
			  (dolist (d-word (append (cond&lt;a href="#footnote_23_12" id="identifier_23_12" class="footnote-link footnote-identifier-link" title="gethash word1 *vocab*) (list (gethash word1 *vocab*">24&lt;/a>))
						  derive-word1))
				  (cond&lt;a href="#footnote_24_12" id="identifier_24_12" class="footnote-link footnote-identifier-link" title="make-compound (word-prop-literal d) (word-prop-literal d-word">25&lt;/a>
					 (dolist (d-mod (append (cond&lt;a href="#footnote_25_12" id="identifier_25_12" class="footnote-link footnote-identifier-link" title="gethash mod1 *vocab*) (list (gethash mod1 *vocab*">26&lt;/a>))
								derive-mod1))
						 (cond&lt;a href="#footnote_26_12" id="identifier_26_12" class="footnote-link footnote-identifier-link" title="make-compound (word-prop-literal d) (word-prop-literal d-mod">27&lt;/a>
							(let&lt;a href="#footnote_27_12" id="identifier_27_12" class="footnote-link footnote-identifier-link" title="a1 (make-compound (word-prop-literal d) (word-prop-literal d-word">28&lt;/a>)
							      (a2 (make-compound (word-prop-literal d) (word-prop-literal d-mod))))
							  (cond&lt;a href="#footnote_28_12" id="identifier_28_12" class="footnote-link footnote-identifier-link" title="and (is-POS &#039;m a1) (is-POS &#039;n a2">29&lt;/a>
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
	   (let&lt;a href="#footnote_29_12" id="identifier_29_12" class="footnote-link footnote-identifier-link" title="a1 (make-substring-word word1 word2 :POS &#039;m">30&lt;/a>
		 (a2 (make-substring-word mod1 mod2 :POS 'n)))
	     (cond&lt;a href="#footnote_30_12" id="identifier_30_12" class="footnote-link footnote-identifier-link" title="and a1 a2 (anim-match (gethash a1 *vocab*) (gethash a2 *vocab*">31&lt;/a>
			 (&lt;= (length word1) (length word2)) (&lt;= (length mod1) (length mod2)))
		    (setq answer (format nil "~O ~O" a1 a2))
		    (setq answer-val 8))))  ; made M N, both formed with substrings

	   (cond&lt;a href="#footnote_31_12" id="identifier_31_12" class="footnote-link footnote-identifier-link" title="and (&gt; 8 answer-val) (&gt;= 8 threshold">32&lt;/a>
		  (let&lt;a href="#footnote_32_12" id="identifier_32_12" class="footnote-link footnote-identifier-link" title="a1 (make-substring-word word1 word2 :POS &#039;n">33&lt;/a>
			(a2 (make-substring-word mod1 mod2 :POS 'm)))
		    (cond&lt;a href="#footnote_33_12" id="identifier_33_12" class="footnote-link footnote-identifier-link" title="and a1 a2 (anim-match (gethash a1 *vocab*) (gethash a2 *vocab*">34&lt;/a>
				(&lt;= (length word1) (length word2)) (&lt;= (length mod1) (length mod2)))
			   (setq answer (format nil "~O ~O" a2 a1))
			   (setq answer-val 8))))))  ; made M N, both formed with substrings

	   (cond&lt;a href="#footnote_34_12" id="identifier_34_12" class="footnote-link footnote-identifier-link" title="and (&gt; 8 answer-val) (&gt;= 8 threshold">35&lt;/a>
		  (let&lt;a href="#footnote_35_12" id="identifier_35_12" class="footnote-link footnote-identifier-link" title="ans-list1 nil)
			(ans-list2 nil">36&lt;/a>
		    (dolist (d derive-word1)
			    (dolist (m derive-mod1)
				    (setq ans-list1 (append ans-list1 (let&lt;a href="#footnote_36_12" id="identifier_36_12" class="footnote-link footnote-identifier-link" title="tmp (make-compound (word-prop-literal d) (word-prop-literal m">37&lt;/a>))
									(cond (tmp (list tmp))))))))
		    (dolist (d derive-word2)
			    (dolist (m derive-mod2)
				    (setq ans-list2 (append ans-list2 (let&lt;a href="#footnote_37_12" id="identifier_37_12" class="footnote-link footnote-identifier-link" title="tmp (make-compound (word-prop-literal d) (word-prop-literal m">38&lt;/a>))
								       (cond (tmp (list tmp))))))))
		    (cond&lt;a href="#footnote_38_12" id="identifier_38_12" class="footnote-link footnote-identifier-link" title="and ans-list1 ans-list2)

			   (dolist (a1 ans-list1)
				   (dolist (a2 ans-list2)
					   (cond ((and (is-POS &#039;m a1) (is-POS &#039;m a2">39&lt;/a>
						  (setq answer (format nil "I don't know, but its ~O and ~O"
								       (word-prop-literal a1) (word-prop-literal a2)))
						  (setq answer-val 8))
						&lt;a href="#footnote_39_12" id="identifier_39_12" class="footnote-link footnote-identifier-link" title="and (is-POS &#039;n a1) (is-POS &#039;m a2) (anim-match a1 a2">40&lt;/a>
						  (setq answer (format nil "~O ~O" (word-prop-literal a2) (word-prop-literal a1)))
						  (setq answer-val 8))
						&lt;a href="#footnote_40_12" id="identifier_40_12" class="footnote-link footnote-identifier-link" title="and (is-POS &#039;m a1) (is-POS &#039;n a2) (anim-match a1 a2">41&lt;/a>
						  (setq answer (format nil "~O ~O" (word-prop-literal a1) (word-prop-literal a2)))
						  (setq answer-val 8))))))))))))

    ; the joke loses "funny points" if the answer and question contain the same word
    (cond&lt;a href="#footnote_41_12" id="identifier_41_12" class="footnote-link footnote-identifier-link" title="substring word1 answer)
	   (setq answer-val (- answer-val 4">42&lt;/a>))
    (cond&lt;a href="#footnote_42_12" id="identifier_42_12" class="footnote-link footnote-identifier-link" title="substring word2 answer)
	   (setq answer-val (- answer-val 4">43&lt;/a>))
    (cond&lt;a href="#footnote_43_12" id="identifier_43_12" class="footnote-link footnote-identifier-link" title="substring mod1 answer)
	   (setq answer-val (- answer-val 4">44&lt;/a>))
    (cond&lt;a href="#footnote_44_12" id="identifier_44_12" class="footnote-link footnote-identifier-link" title="substring mod2 answer)
	   (setq answer-val (- answer-val 4">45&lt;/a>))

  ; it also loses points if the punchline has been used before
    (cond&lt;a href="#footnote_45_12" id="identifier_45_12" class="footnote-link footnote-identifier-link" title="gethash answer *punchline*)
	   (setq answer-val (- answer-val (* 4 (gethash answer *punchline*">46&lt;/a>))))

  ; only return joke if it is funny enough
    (cond&lt;a href="#footnote_46_12" id="identifier_46_12" class="footnote-link footnote-identifier-link" title="&gt;= answer-val threshold)
	   (add-punchline answer) ; record the punchline so it is less likely to be used again

	   (cond ((not (null mod1">47&lt;/a> ; record the elements of the question so we don't get more jokes with the question and the punchline switched
		  (add-punchline (format nil "~O ~O" mod1 word1))))
	   (cond&lt;a href="#footnote_47_12" id="identifier_47_12" class="footnote-link footnote-identifier-link" title="not (null mod2">48&lt;/a>
		  (add-punchline (format nil "~O ~O" mod2 word2))))

	   answer))))</code></pre>

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

<pre line="386"><code class="language-lisp">(add-relation "cheetah" "fast" :POS2 'm :anim1 't :anim2 't)
(add-relation "cheetah" "spots" :anim1 't)
(add-relation "elephant" "trunk" :anim1 't)
(add-relation "grave" "serious" :POS1 'b :POS2 'm :anim1 't :anim2 't)
(add-relation "thief" "robber" :anim1 't :anim2 't)</code></pre>

The homophones list stores word-prop structs that sound like the word. For example, word-props for &#8220;hair&#8221; and &#8220;hare.&#8221;

<pre line="453"><code style="language-lisp">(add-homophone "cereal" "serial" :POS2 'm)
(add-homophone "hare" "hair" :anim1 't :art2 'f)</code></pre>

Article usage `(art)` values can be either `'t` (true) or `'f` (false).

Each word can also be animate, inanimate, or both. Animate nouns are people, animals, etc. Animate modifiers are modifiers that can be applied to animate nouns. This distinction prevents the use of phrases like &#8220;excited rain&#8221; while allowing &#8220;excited dog.&#8221;

To create the vocabulary, I first started by adding words, relations, and homophones that create known jokes. After testing that the generator could produce jokes if given this information, I added additional words that are related to known words, homophones of known words, and compound words containing known words.

To create your own original jokes, replace the vocabulary in `(seed-knowledge)` with your own relations, homophones, and words.

## Improvements

There are a few areas that could be improved.

  1. Expand the scope of relationships between words with semantic knowledge. As mentioned earlier, it would be useful to know that &#8220;sour rain&#8221; is not a good phrase, but &#8220;sour lemon&#8221; is. It would also be useful to make distinctions between the different types of relations that can occur between words, and to be able to express the idea that the combination of two words can result in another word or phrase based on semantic information.
  2. More complete phonetic information. Some transformations rely on substitutions made by partial homophones. For example &#8220;mew&#8221; (the noise a cat makes) is phonetically similar to the &#8220;mu&#8221; in music, but it different from the &#8220;mu&#8221; in murderer. There is currently no way to express this difference.
  3. More complete vocabulary. The vocabulary is somewhat contrived. A more telling test of the joke generator would be to import the vocabulary from an unbiased source. A more complex part of speech identifier could also be implemented.

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

<ol class="footnotes">
  <li id="footnote_0_12" class="footnote">
    literals (cdr *literal-list*) (cdr literals [<a href="#identifier_0_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_1_12" class="footnote">
    null (cdr literals [<a href="#identifier_1_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_2_12" class="footnote">
    is-POS 'n (gethash word1 *vocab* [<a href="#identifier_2_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_3_12" class="footnote">
    is-POS 'n (gethash word2 *vocab* [<a href="#identifier_3_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_4_12" class="footnote">
    literals-m (append *literal-list* (list nil [<a href="#identifier_4_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_5_12" class="footnote">
    null (cdr literals-m [<a href="#identifier_5_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_6_12" class="footnote">
    and (or (null mod1) (is-POS 'm (gethash mod1 *vocab* [<a href="#identifier_6_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_7_12" class="footnote">
    and (or (null mod2) (is-POS 'm (gethash mod2 *vocab* [<a href="#identifier_7_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_8_12" class="footnote">
    answer (answer-joke word1 word2 mod1 mod2 [<a href="#identifier_8_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_9_12" class="footnote">
    derive-word1 (derive-words word1 [<a href="#identifier_9_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_10_12" class="footnote">
    and (null mod1) (null mod2 [<a href="#identifier_10_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_11_12" class="footnote">
    a (make-compound (word-prop-literal d1) (word-prop-literal d2 [<a href="#identifier_11_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_12_12" class="footnote">
    is-POS 'm a) (setq answer (format nil "I don't know, but it's ~O" (word-prop-literal a [<a href="#identifier_12_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_13_12" class="footnote">
    is-POS 'n a) (setq answer (word-prop-literal a [<a href="#identifier_13_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_14_12" class="footnote">
    and (> 8 answer-val) (>= 8 threshold) (member (word-prop-literal d1) (mapcar 'word-prop-literal (word-prop-homophone d2 [<a href="#identifier_14_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_15_12" class="footnote">
    ans-prop (cond ((is-POS 'x d1) d1) ((is-POS 'x d2) d2) ((is-POS 'b d1) d1) ((is-POS 'b d2) d2) ((is-POS 'm d1) d1) ((is-POS 'm d2) d2) (t d1 [<a href="#identifier_15_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_16_12" class="footnote">
    or (is-POS 'm d1) (is-POS 'm d2 [<a href="#identifier_16_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_17_12" class="footnote">
    and (> 3 answer-val) (>= 3 threshold [<a href="#identifier_17_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_18_12" class="footnote">
    and (> 3 answer-val) (>= 3 threshold [<a href="#identifier_18_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_19_12" class="footnote">
    and (is-POS 'm d1) (is-POS 'n d2 [<a href="#identifier_19_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_20_12" class="footnote">
    or (null mod2) (null mod1 [<a href="#identifier_20_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_21_12" class="footnote">
    null mod1) (let ((tmp nil [<a href="#identifier_21_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_22_12" class="footnote">
    and (> 7 answer-val) (>= 7 threshold [<a href="#identifier_22_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_23_12" class="footnote">
    gethash word1 *vocab*) (list (gethash word1 *vocab* [<a href="#identifier_23_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_24_12" class="footnote">
    make-compound (word-prop-literal d) (word-prop-literal d-word [<a href="#identifier_24_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_25_12" class="footnote">
    gethash mod1 *vocab*) (list (gethash mod1 *vocab* [<a href="#identifier_25_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_26_12" class="footnote">
    make-compound (word-prop-literal d) (word-prop-literal d-mod [<a href="#identifier_26_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_27_12" class="footnote">
    a1 (make-compound (word-prop-literal d) (word-prop-literal d-word [<a href="#identifier_27_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_28_12" class="footnote">
    and (is-POS 'm a1) (is-POS 'n a2 [<a href="#identifier_28_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_29_12" class="footnote">
    a1 (make-substring-word word1 word2 :POS 'm [<a href="#identifier_29_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_30_12" class="footnote">
    and a1 a2 (anim-match (gethash a1 *vocab*) (gethash a2 *vocab* [<a href="#identifier_30_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_31_12" class="footnote">
    and (> 8 answer-val) (>= 8 threshold [<a href="#identifier_31_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_32_12" class="footnote">
    a1 (make-substring-word word1 word2 :POS 'n [<a href="#identifier_32_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_33_12" class="footnote">
    and a1 a2 (anim-match (gethash a1 *vocab*) (gethash a2 *vocab* [<a href="#identifier_33_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_34_12" class="footnote">
    and (> 8 answer-val) (>= 8 threshold [<a href="#identifier_34_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_35_12" class="footnote">
    ans-list1 nil) (ans-list2 nil [<a href="#identifier_35_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_36_12" class="footnote">
    tmp (make-compound (word-prop-literal d) (word-prop-literal m [<a href="#identifier_36_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_37_12" class="footnote">
    tmp (make-compound (word-prop-literal d) (word-prop-literal m [<a href="#identifier_37_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_38_12" class="footnote">
    and ans-list1 ans-list2) (dolist (a1 ans-list1) (dolist (a2 ans-list2) (cond ((and (is-POS 'm a1) (is-POS 'm a2 [<a href="#identifier_38_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_39_12" class="footnote">
    and (is-POS 'n a1) (is-POS 'm a2) (anim-match a1 a2 [<a href="#identifier_39_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_40_12" class="footnote">
    and (is-POS 'm a1) (is-POS 'n a2) (anim-match a1 a2 [<a href="#identifier_40_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_41_12" class="footnote">
    substring word1 answer) (setq answer-val (- answer-val 4 [<a href="#identifier_41_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_42_12" class="footnote">
    substring word2 answer) (setq answer-val (- answer-val 4 [<a href="#identifier_42_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_43_12" class="footnote">
    substring mod1 answer) (setq answer-val (- answer-val 4 [<a href="#identifier_43_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_44_12" class="footnote">
    substring mod2 answer) (setq answer-val (- answer-val 4 [<a href="#identifier_44_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_45_12" class="footnote">
    gethash answer *punchline*) (setq answer-val (- answer-val (* 4 (gethash answer *punchline* [<a href="#identifier_45_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_46_12" class="footnote">
    >= answer-val threshold) (add-punchline answer) ; record the punchline so it is less likely to be used again (cond ((not (null mod1 [<a href="#identifier_46_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
  <li id="footnote_47_12" class="footnote">
    not (null mod2 [<a href="#identifier_47_12" class="footnote-link footnote-back-link">&#8617;</a>]
  </li>
</ol>