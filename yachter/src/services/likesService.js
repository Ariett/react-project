import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/data/likes';

export const getAllLikes = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getMemberLikes = async (memberId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${memberId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const addLike = async (yachtId) => {
    const result = await request.post(baseUrl, { yachtId });

    return result;
};

export const removeLike = async (likeId) => await request.remove(`${baseUrl}/${likeId}`);

export const getMostLiked = (allLikes, allYachts) => {

    // Create a map to store the like counts for each yacht
    const likeCounts = new Map();

    // Iterate through the likesArray to count likes for each yacht
    allLikes.forEach((like) => {
        const yachtId = like.yachtId;

        // If the yachtId is not in the map, initialize it with 1 like
        if (!likeCounts.has(yachtId)) {
            likeCounts.set(yachtId, 1);
        } else {
            // Increment the like count for the yacht
            likeCounts.set(yachtId, likeCounts.get(yachtId) + 1);
        }
    });

    // Sort yachtsArray based on like counts and _createdOn
    allYachts.sort((a, b) => {
        const likesA = likeCounts.get(a.id) || 0;
        const likesB = likeCounts.get(b.id) || 0;

        // If likes are equal, sort by _createdOn
        if (likesA === likesB) {
            return 0;
        }

        // Sort by likes in descending order
        return likesB - likesA;
    });

    // Return the top 3 yachts
    return allYachts.slice(0, 3);
};