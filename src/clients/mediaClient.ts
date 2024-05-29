import axios, { AxiosInstance } from 'axios';
import { baseURL } from '../settings/settings';
import { MediaType } from "../types/mediaType"


class MediaClient {
  private client: AxiosInstance;
  private projectId: string;
  private apiKey: string;

  constructor(
    apiCredentials: any
  ) {
    this.client = axios.create({
      baseURL,
    });
    this.projectId = apiCredentials.projectId;
    this.apiKey = apiCredentials.apiKey;
  }

  async getMedia(mediaId: string): Promise<MediaType> {
    const response = await this.client.get<MediaType>(`/v1/projects/${this.projectId}/medias/${mediaId}`, {headers: { 'X-Streaks-Api-Key': this.apiKey, "Content-Type": "application/json" }});
    return response.data;
  }
}

export default MediaClient;