import { React, useState } from "react";

export default function Col() {
    const p =
    {
        "topic": "shopping in barcelona",
        "country": "us",
        "phrase_search": "fullsearch",
        "columnNames": [
            "Keyword",
            "Search Volume",
            "Intent",
            "CPC",
            "Competition",
            "Number of Results",
            "Trends",
            "Keyword Difficulty"
        ],
        "raw_related_data": [
            [
                "guide",
                "33100",
                "0",
                "0.64",
                "0.01",
                "14720000000",
                "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
                "11"
            ],
            [
                "search engine",
                "33100",
                "8",
                "0.27",
                "0.16",
                "2080000000",
                "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
                "33"
            ],
            [
                "search engine optimization",
                "33100",
                "0",
                "0.14",
                "0.27",
                "239000000",
                "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
                "28"
            ],
            [
                "seo company",
                "27100",
                "0",
                "0.22",
                "0.12",
                "339000000",
                "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
                "18"
            ],
            [
                "seo services",
                "27100",
                "0",
                "0.09",
                "0.27",
                "347000000",
                "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
                "21"
            ]
        ],
        "raw_broadmatch_data": [
            [
                "shopping in barcelona",
                "480",
                "0",
                "0.24",
                "0.12",
                "313000000",
                "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
                "46"
            ],
            [
                "how to open a weed shop in barcelona",
                "320",
                "1",
                "0",
                "0",
                "4800000",
                "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
                "12"
            ],
            [
                "best shopping in barcelona",
                "260",
                "0",
                "0",
                "0.05",
                "314000000",
                "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
                "44"
            ],
            [
                "shopping in barcelona spain",
                "140",
                "0",
                "0.47",
                "0.06",
                "87900000",
                "0.43,0.43,0.34,0.09,0.43,0.28,0.28,0.15,0.43,1.00,1.00,0.65",
                "44"
            ],
            [
                "best coffee shops in barcelona",
                "90",
                "0",
                "0",
                "0.01",
                "22100000",
                "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
                "26"
            ],
            [
                "luxury shopping in barcelona",
                "70",
                "0",
                "0",
                "0.02",
                "19800000",
                "0.21,0.21,0.21,0.21,0.21,0.21,0.14,0.78,0.78,0.78,1.00,1.00",
                "24"
            ],
            [
                "tattoo shops in barcelona spain",
                "70",
                "0",
                "0",
                "0.04",
                "4380000",
                "0.14,0.14,0.14,0.14,0.14,0.52,0.09,0.52,0.52,0.52,0.52,0.09",
                "23"
            ],
            [
                "where to shop in barcelona",
                "70",
                "0",
                "0",
                "0.02",
                "250000000",
                "0.21,0.21,0.21,0.21,0.21,0.28,0.35,0.35,1.00,1.00,1.00,1.00",
                "36"
            ],
            [
                "best places to shop in barcelona",
                "40",
                "0",
                "0",
                "0.03",
                "0",
                "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
                "42"
            ],
            [
                "is shopping cheap in barcelona",
                "40",
                "0",
                "0",
                "0",
                "21500000",
                "0.14,0.64,0.14,0.14,0.00,0.35,0.14,0.14,1.00,0.14,0.14,0.14",
                "36"
            ]
        ],
        "raw_question_data": [
            [
                "is it expensive to shop",
                "33100",
                "0",
                "0.64",
                "0.01",
                "14720000000",
                "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
                "11"
            ],
            [
                "cheap things in barcelona",
                "33100",
                "8",
                "0.27",
                "0.16",
                "2080000000",
                "0.53,0.35,0.28,0.28,0.28,0.43,0.66,0.35,0.82,1.00,1.00,1.00",
                "33"
            ],
            [
                "costliest accessories",
                "33100",
                "0",
                "0.14",
                "0.27",
                "239000000",
                "0.66,0.14,0.23,0.19,0.52,0.14,0.52,1.00,0.80,0.14,0.66,0.52",
                "28"
            ],
            [
                "trending items",
                "27100",
                "0",
                "0.22",
                "0.12",
                "339000000",
                "0.21,0.21,0.21,0.14,0.21,0.39,0.59,0.48,1.00,0.88,0.88,0.59",
                "18"
            ],
            [
                "jewellery",
                "27100",
                "0",
                "0.09",
                "0.27",
                "347000000",
                "0.39,0.39,0.72,1.00,1.00,0.01,0.01,0.01,0.01,0.01,0.01,0.01",
                "21"
            ]
        ],
        "request_id": "74bf439b-ffc7-493a-b758-1e37c80c5c29",
        "status": 200,
        "created_date": "2022-11-19T05:39:27.001544"
    };

    const [color, setColor] = useState(0);
    const p1 = p.raw_related_data;
    console.log(p1)
    return (
        <div className="flex flex-col">



            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">

                                {/* {p.map((item)=>{ console.log(item) 
                                   return ( */}


                                {/* )}) } */}
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr><th scope="col" className="py-3 pl-4">
                                    <div className="flex items-center h-5 w-7">
                                        <input
                                            id="checkbox-all"
                                            type="checkbox"
                                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="checkbox"
                                            className="sr-only"
                                        >
                                            Checkbox
                                        </label>
                                    </div>
                                </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        bristi
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        {p.columnNames[1]}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        {p.columnNames[2]}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        {p.columnNames[3]}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        {p.columnNames[4]}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        {p.columnNames[5]}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        {p.columnNames[6]}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        {p.columnNames[7]}
                                    </th>
                                </tr>
                                <tr>
                                    {p1.map((item) => {
                                        return (
                                            <tr>

                                                {item.map((item1) => {
                                                    return (
                                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                            {item1}
                                                        </td>
                                                    )
                                                })}</tr>
                                        )
                                    })}
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}