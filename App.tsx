import * as React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';
import { faArrows} from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';

export default function App() {

  const [markdown, setMarkdown] = React.useState('');

  function updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  return (
    <div>
      <div id="editor">
        
        <div className="toolbar">

          <FontAwesomeIcon className="editIcon" icon={faComment} />Editor
          <FontAwesomeIcon className="arrowIcon" icon={faArrows} />
          
        </div>

        <textarea 
          placeholder="Enter text here" 
          name="textarea" 
          id="text" 
          value={markdown}
          onChange={(e)=>{setMarkdown(e.target.value)
          }}>
        </textarea>

      </div>

      <div id="preview">

        <div className="toolbar">

          <FontAwesomeIcon className="editIcon" icon={faComment} />Preview
          <FontAwesomeIcon className="arrowIcon" icon={faArrows} />

        </div>

        <div className="previewbox">
          <div  dangerouslySetInnerHTML={{
                  __html: marked(markdown),}}>
          </div>
        </div>
      </div>

    </div>
  );
}
