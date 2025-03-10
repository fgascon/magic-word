'use client';
import React, { useState } from 'react';

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  tags: string[];
}

const DefaultThumbnail: React.FC = () => (
  <div className="h-48 bg-gray-200 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-16 h-16 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.971l-11.54 6.347a1.125 1.125 0 0 1-1.667-.985V5.653Z"
      />
    </svg>
  </div>
);

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        {video.thumbnail && !isError ? (
          <img
            src={video.thumbnail}
            onError={() => setIsError(true)}
            alt={video.title}
            className="h-48 w-full object-cover"
          />
        ) : (
          <DefaultThumbnail />
        )}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
          <div className="flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;