import React, {useState} from 'react'

const Filter = ({persons}) => {
    const [searchResults, setSearchResults] = useState([])

    function filterPhonebook(event) {

        const search = event.target.value
        persons.filter(function (person) {
            const name = person.name
            let result = name.includes(search)
            if (result) {
                setSearchResults([person])
            }
        })
    }


    return (
        <div>
            filter for contact: <input onChange={filterPhonebook} />
            <br />
            {searchResults.map((person, i) => (
                <React.Fragment key={i}>
                    {person.name}
                    {person.number}
                    <br />
                </React.Fragment>
            ))}
        </div>
    )
}

export default Filter
