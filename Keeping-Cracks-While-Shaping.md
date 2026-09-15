# Keeping a favorite crack while shaping clay

Meld Clay v1 · Artist workflow

A crack can become part of a model's character before the surrounding shape is finished. You can soften a pinched point, round a corner, or adjust a join without choosing a new random crack pattern. **Hold Shape and the individual shape and join controls leave both Random seed and Crack seed unchanged.** This lets you refine the clay around a surface detail you already like.

There are two different kinds of preservation here: keeping the seeded pattern, and keeping the exact surface layout. A shape edit can preserve the first while changing the second.

## What stays, and what can change

- **Seed preservation:** the operation does not roll a new pattern or change either seed value.
- **Surface refresh:** Meld Clay may rebuild crack samples, centers, or surface paths after the underlying clay changes, using those same seeds. This is different from pressing a seed refresh arrow.
- **Visible placement:** the same pattern can meet a reshaped surface differently. A small adjustment can retain a recognizable favorite crack; a large change can move its apparent position, change its extent, or make it disappear. An unchanged seed is not a pin attaching a crack to a particular source vertex.

The following applies to ordinary edits on an already configured live model. Older models that adopt a new shaping or crack method may rebuild supporting data during that upgrade.

## Controls that keep the existing seeds

| Operation | What happens to the cracks | Artistic use |
| --- | --- | --- |
| **Hold Shape** | Keeps both seeds. Prepared detailed clay deforms with the part before bite impressions. Larger edits can stretch or compress visible cracks. | Lower it to let a pinched or faceted part soften. Raise it to protect a contour. It protects shape, not cracks. |
| **Knead / soften** | Keeps both seeds; changes the surface on which cracks are evaluated. Sampling and applicable captured layouts may refresh. | Round a corner or soften an intersection while retaining the chosen pattern. |
| **Surface cleanup: Auto / Off** | Keeps both seeds. Current softening includes this setting in surface refresh checks. | Auto reduces small remeshing steps, including on held parts and at Knead 0. |
| **Source rounding** | Keeps both seeds; reshapes the source contribution before melding and can refresh crack data. | Round a coarse cage. Its effect increases with Knead up to 45 and is reduced by Hold Shape. |
| **Hand pressure, Pressure areas, Pressure breadth** | Keep both seeds. The surface changes beneath the crack pattern, so crack data may refresh. | Adjust broad squeezes or reduce a pressure dent without randomizing cracks. |
| **Palm rolled, Thumb pressed, Gently kneaded** | Keep both seeds, but change several shape settings together and can refresh crack data. | Explore a broader shape treatment. For a small correction, individual controls give finer control. Choosing **Custom** alone keeps the current result. |
| **Inflate / deflate** | Keeps both seeds; changes the parts before melding and can refresh crack data. | Adjust fullness or bridge a small gap. A new connection can change visible cracks substantially. |
| **Form variation** | Keeps both seeds; reuses the current global seed for different part proportions. Can refresh crack data. | Adjust fullness or proportions, checking cracks where the silhouette changes. |
| **Join style: Blended / Pressed; Crease strength, Crease width, End taper** | Keep both seeds. Changed join geometry can refresh crack data. A pressed join crease is a separate feature from the procedural crack pattern. | Soften, strengthen, widen, or taper a contact without rolling new cracks. Join Copy/Paste also keeps the seeds; it does not copy Hold Shape. |
| **Hand-shaped amount, Hand-shaped scale** | Keep both seeds and reuse the pre-displacement crack layout during ordinary edits. These surface-noise controls are separate from Hand pressure. | Reduce surface unevenness around a crack while keeping its underlying pattern. The displaced crack still moves with the surface and its shading can change. |
| **Midlevel** | Keeps both seeds and reuses the pre-displacement crack layout during ordinary edits. | Offset the finished surface along its normals. This differs from Inflate / deflate, which changes the source parts before melding. |
| **Resolution** | Keeps both seeds, but rebuilds the base mesh and crack sampling; applicable captured layouts can refresh. | Resolve small features. Treat it as a quality adjustment and compare the settled result. |

Editing or moving an individual source, changing its modifiers, or adding/removing parts also leaves the seeds unchanged, but can substantially change the surface and visible layout. These are not exact-placement-preserving operations.

## Soften a pinch while keeping a favorite crack

1. Save a working copy once you like a crack. Keep **Random seed**, **Crack seed**, and the crack layout settings unchanged.
2. If the pinch belongs to a protected source, lower **Hold Shape** gradually. On a one-part model, select the finished model and use the slider below Knead / soften. On a multi-part model, use **Edit Parts**, select that source, and adjust Hold Shape in **Join Controls**.
3. Compare a small increase in **Knead / soften**. With clay shaping enabled, Source rounding can help round a coarse source. If broad pressure caused the dent, try reducing **Hand pressure** instead. Hold Shape also protects against hand pressure, so lowering Hold can expose more of that effect.
4. Let refinement finish and use **Full Quality Now** in either editing mode. Keep Full-detail editing on to see the complete surface as you work. Inspect the favorite crack and the silhouette from the same angle after each adjustment.
5. If the pinch is inside a narrow crack wall rather than in the underlying shape, check **Crack quality** first. Base mesh can show steps or pinches; Standard or Close-up can improve sampling without rolling a new seed. Compare the result, since sampling can affect visible detail.

The useful freedom is that a shape correction does not demand a new random pattern. Your successful pinch fix is a good example: the clay can soften while a recognizable crack remains part of the design.

## Operations to distinguish from a local shape correction

- **Random seed or its arrow** changes the shared variation, including cracks. **Crack seed or its arrow** deliberately changes the crack pattern alone.
- **Shape & Melding Paste includes Random seed.** It can therefore change cracks even though it does not copy Crack seed. Record the destination's global seed before pasting if you intend to restore it; the pasted shape may still change the surface layout.
- **Layout density, Texture scale, crack style, coverage, detail, size, and width** alter crack layout or extent without necessarily changing a seed. In current Soft Dough, surface paths can be regenerated and crowded paths can be shortened or omitted. Keeping the seed alone does not freeze these results.
- **Clay Finish selection/reset and Finish or Fingerprints & Cracks Paste** can replace crack-related settings. Check those values before using them on a look you want to retain.
- **Sticky / World coordinates:** moving the whole model with its parts through the whole-model controller in Sticky space keeps its pattern attached. World space samples a fixed world pattern, so movement can change the visible placement without changing a seed. Switching spaces can also change the layout.
- **Update Softening and other explicit method updates** retain recovery data, but may change the generated result. Compare them on a saved copy of an authored model.

## Current and older models

This reference describes the current v1 full-detail workflow. The first edit after loading or Undo/Redo can prepare reusable data again. Custom or older graph layouts can use the full canonical evaluation path instead of the accelerated path.

Hold retains its saved starting value. The current softened-to-held range can differ from earlier builds, particularly on angular parts and at extreme values. Keep a separate saved copy and judge the shape and crack together. The older artistic comparison images document their authored method; they are visual references rather than exact endpoint guarantees for current Hold.
