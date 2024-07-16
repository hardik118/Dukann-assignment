import { Cards } from "./components/cards"
import { Appbar } from "./components/appbar"
import { Transaction } from "./components/Landing"
import { Search } from "./components/search"
import { Table } from "./components/table"

export const  SCreen= ()=>{
    return <div>
            <Appbar />
            <Cards/>
            <Transaction/>
            <Search></Search>
            <Table/>
    </div>

}