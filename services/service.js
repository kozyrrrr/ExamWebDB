import supabase from "../configs/dbConfig.js"

const addNote = async item => {
	try {
        const { data, error } = await supabase
  		.from('names')
  		.insert(Note)

		if (error) throw error
		return data
	} catch (e) {
			throw e
	}
}

export default {
	addNote
}

