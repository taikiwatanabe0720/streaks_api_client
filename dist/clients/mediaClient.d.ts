import { MediaType } from "../types/mediaType";
declare class MediaClient {
    private client;
    private projectId;
    private apiKey;
    constructor(apiCredentials: any);
    getMedia(mediaId: string): Promise<MediaType>;
    updateMedia(mediaId: string, params: any): Promise<MediaType>;
}
export default MediaClient;
