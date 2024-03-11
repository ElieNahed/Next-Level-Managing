import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type VideoDetails = {
    title: string;
    image: string;
};

type ErrorResponse = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<VideoDetails | ErrorResponse>
) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Accessing environment variable
        if (!apiUrl) {
            throw new Error('API URL is not defined');
        }

        const response = await axios.get(apiUrl);
        const { result } = response.data.data;
        const { title, image } = result;
        // Ensure that the title and image are present in the response
        if (!title || !image) {
            throw new Error('Invalid response format');
        }
        res.status(200).json({ title, image });
    } catch (error) {
        console.error('Error fetching video details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
