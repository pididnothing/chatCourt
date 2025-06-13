import React from 'react';

function ClosedCourtFilter({ closedFilter, setClosedFilter }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={closedFilter}
                onChange={() => setClosedFilter(!closedFilter)}
                className="toggle border-accent bg-accent checked:border-base-200 checked:bg-base-300"
            />
        </div>
    );
}
export default ClosedCourtFilter;
