'use client'

import { useChat } from '@ai-sdk/react'
import { useEffect, useRef, useState } from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({})
  const [model, setModel] = useState('deepseek-v3')
  const handleChangeModel = () => {
    setModel(model == 'deepseek-v3' ? 'deepseek-r1' : 'deepseek-v3')
  }

  //自动向下滚动
  const endRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (endRef.current) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col w-2/3 gap-8 overflow-y-auto flex-1 justify-between ">
        <div className="h-4"></div>
        {/* message */}
        <div className="flex flex-col gap-8 flex-1">
          {messages.map(message => (
            <div
              key={message.id}
              className={`rounded-lg flex flex-row ${
                message?.role === 'assistant'
                  ? 'justify-start mr-18'
                  : 'justify-end ml-10'
              }`}
            >
              <p
                className={`p-2 rounded-lg ${
                  message?.role === 'assistant'
                    ? 'bg-blue-300'
                    : 'bg-slate-100 dark:bg-[#212121]'
                }`}
              >
                {message.content}
              </p>
            </div>
          ))}
        </div>

        {/* auto down */}
        <div className="h-4" ref={endRef}></div>

        {/* submit */}
        <div className="shadow-lg border boder-gray-300 rounded-lg h-32 mt-4 flex justify-center items-center flex-col">
          <textarea
            className="w-full rounded-lg p-3 h-30 focus:outline-none"
            value={input}
            onChange={handleInputChange}
          ></textarea>
          <div className="flex flex-row items-center justify-between w-full h-12 mb-2">
            <div>
              <div
                className={`shadow-lg rounded-lg px-2 py-1 ml-2 cursor-pointer ${
                  model === 'deepseek-r1'
                    ? 'border-blue-300 bg-blue-200'
                    : 'border-gray-300'
                } flex justify-center items-center`}
                onClick={handleChangeModel}
              >
                <p className="text-sm">深度思考(R1)🤔</p>
              </div>
            </div>
            <div
              className="border-2 rounded-full mr-3 p-1 flex justify-center items-center"
              onClick={handleSubmit}
            >
              <ArrowUpwardRoundedIcon></ArrowUpwardRoundedIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
