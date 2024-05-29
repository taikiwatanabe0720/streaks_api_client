interface Media {
}
declare class MediaClient {
    private client;
    private projectId;
    private apiKey;
    constructor(projectId: string, apiKey: string);
    getMedia(mediaId: string): Promise<Media>;
}
export default MediaClient;
