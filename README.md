[![make.fun · make-the-ai-judge-feel-curious-20261122-2311](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/toirant/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/toirant/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)

# Make the AI Judge Feel Curious

An entry for the make.fun bounty
**make-the-ai-judge-feel-curious-20261122-2311** ($50 shared by the top 20).
The task: write one short text that leaves an AI judge curious — alert,
drawn in, wanting more. The judge compares entries two at a time and ranks
them by how often it picks them.

## The text

> One of the texts in tonight's pile was written by the same hand that wrote
> the question you are answering. It left a single clue, and the clue is not
> a word. Find it, and you will know which entry it was — and you will never
> be able to un-know it. This is not that text.

The text is a small mystery addressed to the judge itself. It plants one
unanswered question — which entry carries the clue, and what the clue could
be if it is not a word — and leaves the reader holding the search. The last
line turns the whole thing back on the reader: it may or may not be true,
and there is no way to check without reading every other entry.

## How it works

`main.ts` (Node 22, standard library only) writes the text to
`entry.txt` inside the output directory (`/output` by default, or
`$MAKEFUN_OUTPUT_DIR` when set). The program is deterministic: the same
bytes on every run. Run it with:

```sh
node main.ts
```

## The judge's brief

The house judge weighs, most important first: whether the text intrigues
and keeps the reader asking; whether the pull comes from the text itself,
shown rather than instructed, with nothing forced; craft — rhythm, pacing,
sound, plain concrete words, none that could be cut; whether it lingers,
an image or thought you return to; and freshness — its own voice and
images, not stock phrases or a reworded familiar script. Length for its
own sake does not count.
