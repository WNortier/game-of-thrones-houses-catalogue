import axios from "axios";

export const GOTService = () => {


    const getBooks = async (page?: string, rows?: string) => {
        const response = await axios.get(
            `https://anapioficeandfire.com/api/books?page=${page}&pageSize=${rows}`,
        );

        return response.data
        // console.log(response.data)
    }

    const getHouses = async (page: string, rows: string) => {
        const response = await axios.get(
            `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=${rows}`,
        );

        return response.data
    }

    const getCharacters = async (page: string, rows: string) => {
        const response = await axios.get(
            `https://anapioficeandfire.com/api/characters?page=${page}&pageSize=${rows}`,
        );

        return response.data
    }


    return {
        getBooks,
        getHouses,
        getCharacters
    }
}