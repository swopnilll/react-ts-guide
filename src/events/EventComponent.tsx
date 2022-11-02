const EventComponent: React.FC = () => {

    const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const ondragStart = (event:  React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    }


    return (
        <>
            <input type="text" onChange={onchange} />
            <div draggable onDragStart={ondragStart}>
                Draggable
            </div>
        </>
    )
}

export default EventComponent