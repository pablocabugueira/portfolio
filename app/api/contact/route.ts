import axios from "axios"
import { NextResponse } from "next/server"
import { z } from "zod"

const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string() 
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, message } = bodySchema.parse(body)

        const messageData = {
            embeds: [
                {
                  "type": "rich",
                  "title": `Contact Message`,
                  "description": "",
                  "color": 0x00ffff,
                  "fields": [
                    {
                      "name": `Name`,
                      "value": name,
                      "inline": true
                    },
                    {
                      "name": `Email`,
                      "value": email,
                      "inline": true
                    },
                    {
                      "name": `Message`,
                      "value": message
                    }
                  ]
                }
            ]
        }

        await axios.post(WEBHOOK_URL, messageData)

        return NextResponse.json({
            message: "Mensagem enviada com sucesso!"
        })
    } catch (err) {
        console.log(err)
        return NextResponse.error()
    }
}