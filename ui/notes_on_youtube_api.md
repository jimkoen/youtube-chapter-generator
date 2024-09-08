## Bugs

### YouTubePlayerComponent

- Failure to load the YouTube API (for example when network connection drops), will not cause the `error` observable to emit.

- Prior to loading the YouTube API, `YouTubePlayerComponent` will be in an undefined state. Properties that should be present (such as `state`) will not be initialized and observables will not emit the undefined state.
