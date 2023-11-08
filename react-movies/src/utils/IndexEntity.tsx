import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Button from "./Button/Button";
import customConfirm from "./customConfirm";
import RecordsPerPageSelect from "./RecordsPerPageSelect";
import Pagination from "./Pagination";
import GenericList from "./GenericList/GenericList";
import { ReactElement } from "react-markdown/lib/react-markdown";


export default function IndexEntity<T>(props: indexEntityProps<T>) {
    const [entities, setEntities] = useState<T[]>();
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    useEffect(() => {
        loadData();
    }, [page, recordsPerPage]);

    function loadData() {
        axios.get(props.url, {
            params: { page, recordsPerPage }
        })
            .then((response: AxiosResponse<T[]>) => {
                const totalAmountOfRecords =
                    parseInt(response.headers['totalAmountOfRecords'], 10);
                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
                setEntities(response.data);
            })
    }

    async function deleteEntity(id: number) {
        try {
            await axios.delete(`${props.url}/${id}`);
            loadData();
        }
        catch (error) {
            if (error) {
                console.error(error);
            }
        }
    }

    const buttons = (editUrl: string, id: number) => <>
        <a className="btn btn-success"
            href={editUrl}>Edit</a>

        <Button className="btn btn-danger" onClick={() => customConfirm(() => deleteEntity(id))}>Delete</Button>

    </>
    return (
        <>
            <h3>{props.title}</h3>
            <a className="btn btn-primary" href={props.createUrl}>Create {props.entityName}</a>
            <RecordsPerPageSelect onChange={amountOfRecords => {
                setPage(1);
                setRecordsPerPage(amountOfRecords);
            }}></RecordsPerPageSelect>
            <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage => setPage(newPage)}></Pagination>
            <GenericList list={entities}>
                <table className="table table-striped">
                    {props.children(entities!, buttons)}
                </table>
            </GenericList>
        </>
    )
}

interface indexEntityProps<T> {
    url: string;
    title: string;
    createUrl: string;
    children(entities: T[],
        buttons: (editUrl: string, id: number) => ReactElement): ReactElement;
    entityName: string;
}