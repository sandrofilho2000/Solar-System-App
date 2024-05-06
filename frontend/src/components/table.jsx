import { useEffect, useState } from "react"
import { api } from "../utils/api"

const Table = () => {
    const [planets, setPlanets] = useState([])

    useEffect(()=>{
        const getPlanets = async () => {
            let results = await api() 
            setPlanets(results)
        }
        getPlanets()
    }, [])

    return (
        <div className="flex flex-col w-[400px] absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full border">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
                                        Planet
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    planets.map((item)=> (
                                    <tr key={item.id} className="bg-gray-100 border-b [&:nth-child(even)]:bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                                            {item.name}🪐
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table