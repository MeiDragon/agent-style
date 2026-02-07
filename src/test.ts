import 'dotenv/config'
import { ChatZhipuAI } from '@langchain/community/chat_models/zhipuai'

const model = new ChatZhipuAI({
  model: 'glm-4',
  apiKey: process.env.ZHIPUAI_API_KEY
})

const response = await model.invoke('今天天气怎么样？')

console.log(response)
