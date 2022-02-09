import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
        MongooseModule.forRoot(
            'mongodb+srv://Nikolay23:N!kolay23@cluster0.0h79z.mongodb.net/music-platform?retryWrites=true&w=majority'
        ),
        TrackModule,
        FileModule
    ]
})
export class AppModule { };