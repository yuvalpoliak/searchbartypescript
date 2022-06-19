import data from './listData.json'

interface itemData{
    id: number,
    text: string
}

function List(props: {input: string}): JSX.Element{
    const filteredData = data.filter((entireList) => {
        if(props.input === ''){
            return entireList;
        }
        else{
            return entireList.text.toLowerCase().includes(props.input)
        }
    })
    return(
    <ul>
        {filteredData.map((item: itemData) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
    )
}
export default List;