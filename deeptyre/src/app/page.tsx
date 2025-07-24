'use client'
import { useState } from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'

export default function Home() {
  const [input, setInput] = useState('')
  const [model, setModel] = useState('v3')
  const handleChangeModel = () => {
    setModel(model == 'deepseek-v3' ? 'deepseek-r1' : 'deepseek-v3')
  }
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="h-1/5"></div>
      <div className="w-1/2">
        <p className="text-bold text-2xl text-center">有什么可以帮您的吗</p>
        <div className="shadow-lg border boder-gray-300 rounded-lg h-32 mt-4 flex justify-center items-center flex-col">
          <textarea
            className="w-full rounded-lg p-3 h-30 focus:outline-none"
            value={input}
            onChange={e => setInput(e.target.value)}
          ></textarea>
          <div className="flex flex-row items-center justify-between w-full h-12 mb-2">
            <div>
              <div
                className={`border shadow-lg rounded-lg px-2 py-1 ml-2 cursor-pointer ${
                  model === 'deepseek-r1'
                    ? 'border-blue-300 bg-blue-200'
                    : 'border-gray-300'
                } flex justify-center items-center`}
                onClick={handleChangeModel}
              >
                <p className="text-sm">深度思考(R1)🤔</p>
              </div>
            </div>
            <div className="border-2 rounded-full mr-3 p-1 flex justify-center items-center">
              <ArrowUpwardRoundedIcon></ArrowUpwardRoundedIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
