import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Alert from "../atoms/alert"; // Import the Alert component

const VideoDetails: React.FC = () => {
  const [videoDetails, setVideoDetails] = useState<{
    title: string;
    image: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get("/api/videoDetails");
        setVideoDetails(response.data);
      } catch (error) {
        console.error("Error fetching video details:", error);
        setError("Error fetching data"); // Set error state
      } finally {
        setLoading(false);
      }
    };
    fetchVideoDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return <Alert message={error} />; // Render the Alert component with error message
  }

  if (!videoDetails) {
    return <div className="bg-red-500">Error fetching data</div>;
  }

  return (
    <div className="mt-[100px] w-fit h-fit p-12 bg-[#ffffff69] border-2 border-violet-900">
      {videoDetails.image && (
        <Image
          src={videoDetails.image}
          alt={videoDetails.title}
          width={400}
          height={300}
        />
      )}
      <h2>Title: {videoDetails.title}</h2>
    </div>
  );
};

export default VideoDetails;
