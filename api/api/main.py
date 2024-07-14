from typing import Union

from fastapi import FastAPI, HTTPException

from youtube_transcript_api import YouTubeTranscriptApi

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get(
    "/transcripts/{video_id}",
    responses={503: {"detail": "Error on transcript retrieval"}},
)
def get_transcript(video_id: str):
    try:
        return YouTubeTranscriptApi.get_transcript(video_id)
    except Exception as e:
        raise HTTPException(
            status_code=503,
            detail=f"Error while retrieving transcript: {e.__class__.__name__}",
        )
