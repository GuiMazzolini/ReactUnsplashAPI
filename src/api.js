import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID W2aZ1e4l7_BdogWkpUoxStSsykladHOjdBq7sNkDOOQ",
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;