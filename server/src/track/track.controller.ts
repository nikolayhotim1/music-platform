import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) { }

    @Post()
    create(@Body() dto: CreateTrackDto) {
        return this.trackService.create(dto);
    }

    @Get()
    getAll() {
        return this.trackService.getAll();
    }

    getOne() {

    }

    delete() {

    }
}