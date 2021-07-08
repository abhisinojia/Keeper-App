import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [content, contentFunction] = useState({
        title: "",
        note: ""
    });
    const[isExpandable, expandFunction] = useState(false);

    function contentChange(event){
        var {name, value} = event.target;
        contentFunction((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function addContent(event){
        props.onAdd(content);
        event.preventDefault();
        contentFunction({title: "", note: ""})
    }

    function expand(){
        expandFunction(true);
    }

  return (
    <div>
      <form className="create-note">
        {isExpandable && <input name="title" placeholder="Title" value = {content.title} onChange = {contentChange}/>}
        <textarea name="note" placeholder="Take a note..." rows={isExpandable? 3 : 1} value = {content.note} onChange = {contentChange} onClick = {expand}/>
        <Zoom in={isExpandable}><Fab onClick = {addContent}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;