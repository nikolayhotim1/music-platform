import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://Nikolay23:N!kolay23@cluster0.0h79z.mongodb.net/music-platform?retryWrites=true&w=majority'
        ),
        TrackModule
    ]
})
export class AppModule { }