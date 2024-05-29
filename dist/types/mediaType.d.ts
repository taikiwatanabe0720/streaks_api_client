import { trackType } from "./trackType";
export interface MediaType {
    id: string;
    project_id: string;
    job_id: string;
    live_event_id: string;
    video_clip_schedule_id: string;
    name: string;
    description?: string;
    publish_status: string;
    duration: number;
    encode_type: null;
    thumbnail: {
        src: null;
    };
    poster: {
        src: null;
    };
    tags: [];
    offline_enabled: boolean;
    tracks: trackType[];
    delivery_config_id: string;
    resolution: null;
    created_at?: string;
    updated_at?: string;
    cue_points?: any;
    ads?: any;
    ad_fields?: null;
    epg_id?: string | null;
    epg_event_id?: string | null;
    program_id?: string | null;
    ssai_config_id?: string | null;
    use_storage_capacity?: number | null;
    archive_status?: string | null;
    archive_level?: string | null;
    delete_type?: string | null;
    delete_schedule_at: string | null;
    publish_start_at: string | null;
    publish_end_at: string | null;
}
