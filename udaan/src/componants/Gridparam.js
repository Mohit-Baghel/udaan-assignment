import React from 'react'

export const Gridparam = () => {
    return (
        <div>
            <form action="/grid">
                row:
                <input name="row"/>
                col:
                <input name="col"/>
                <input type="submit"/>
            </form>
        </div>
    )
}
