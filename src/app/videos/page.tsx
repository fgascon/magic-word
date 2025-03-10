import React from 'react';
import VideoGrid from './components/VideoGrid';
import type { Video } from './components/VideoCard';

const videos: Video[] = [
    {
        id: '1',
        title: 'Introduction to React',
        url: 'https://example.com/video1.mp4',
        thumbnail: '/thumbnails/react.jpg',
        tags: ['React', 'JavaScript', 'Frontend'],
    },
    {
        id: '2',
        title: 'Node.js Basics',
        url: 'https://example.com/video2.mp4',
        thumbnail: '/thumbnails/node.jpg',
        tags: ['Node.js', 'Backend', 'JavaScript'],
    },
    {
        id: '3',
        title: 'CSS Grid Layout',
        url: 'https://example.com/video3.mp4',
        thumbnail: '',
        tags: ['CSS', 'Frontend', 'Layout'],
    },
];

const VideoPage: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Video List</h1>
            <VideoGrid videos={videos} />
        </div>
    );
};

export default VideoPage;