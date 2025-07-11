import type {Rover} from "./rover";
import type {Camera} from "./camera";

export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}
