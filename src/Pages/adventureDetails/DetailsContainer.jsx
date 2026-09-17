import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { DetailsImage } from './DetailsImage';
import { DetailInfo } from './DetailInfo';
export const DetailsContainer = () => {
    let idx = useParams().id
    const navigate = useNavigate()
    let allData = useLoaderData()
    let pageData = allData.find(element => element.id == idx)
    window.scrollTo(0, 0);

    return (
        <div>
            <DetailsImage pageData={pageData} ></DetailsImage>
            <DetailInfo pageData={pageData}></DetailInfo>
        </div>
    )
}
