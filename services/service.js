import supabase from "../configs/dbConfig.js"

const addNote = async Note => {
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

const sendNote = async Note => {
	try {
        const { data, error } = await supabase
  		.from('names')
  		.select('id, firstname, lastname')

		if (error) throw error
		return data
	} catch (e) {
			throw e
	}
}

export default {
	addNote,
    sendNote
}

