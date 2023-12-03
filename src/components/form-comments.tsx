'use client'
import {ChangeEvent, useState} from 'react'

const FormComment = () => {
    const [comment, setComment] = useState<string>('');
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }
    const handleSubmit = () => {
        console.log(comment);
    }
  return (
    <div>
        <div className="mt-4">
            <label  
              htmlFor='comment' 
              className='block text-gray-700 text-sm font-bold mb-2'
            > 
              Add comment 
            </label>
            <input type="text"
                   className='w-full py-2 px-3 border border-gray-300 rounded-300 focus:outline-none
                              focus:ring focus:border-blue-300'
                   name='comment'
                   value={comment}
                   onChange={handleChange}/>
            <button type="submit"
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 
                                rounded-md mt-2 disabled:bg-gray-400'
                    onSubmit={handleSubmit}>
                Submit Comment
            </button>
        </div>
    </div>
  )
}

export default FormComment