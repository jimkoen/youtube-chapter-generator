
export function validateYouTubeUrl(url: string): boolean {
        try {
                const ytUrl = new URL(url)
                if (ytUrl.pathname === "/watch" && ytUrl.search.startsWith("?v=")) {
                        return true;
                } else {
                        return false
                }
        } catch (e: any) {
                return false;
        }
}

export function getYtVideoIdFromUrl(url: string): string {
        if (!validateYouTubeUrl(url)) {
                throw Error("Invalid URL!")
        }

        const ytUrl = new URL(url)
        return ytUrl.search.substring(3)


}

export default {}
