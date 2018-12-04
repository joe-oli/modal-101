ReactModal.setAppElement('#divMountPoint');

class ModalApp101 extends React.Component {

  constructor () {
    super();

    //bind functions on constructor
    this.openModalHandler = this.openModalHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);

    this.state = {
      isModalOpen: false
    };
    

  }

  
  componentDidMount() {
    console.info('hi.. ModalApp101.componentDidMount');
    var divElt = document.getElementsByClassName("page-header")[0];
    //swap out the initial  html loading... message with a new one...
    divElt.innerHTML = '<h3>Modal Popup demo ! componentDidMount :-)</h3>'
  }
  
  openModalHandler () {
    this.setState({ isModalOpen: true });
  }
  
  closeModalHandler () {
    this.setState({ isModalOpen: false });
  }
  
  render () {

    //if you dont want to define this separately, do it directly (inline) by replacing the RHS obj within the ReactModal component below. 
    const styleForRM ={
      overlay: {
        backgroundColor: 'rgba(211,211,211,0.9)', // 'lightgray', //'papayawhip',
        //opacity: '0.9' //use RGBA, opacity affects  both overlay and modal itself
      },
      content: {
        color: 'lightsteelblue',
        backgroundColor: 'whitesmoke',
        top                   : '30%',
        bottom                : 'auto',
        left                  : '50%',
        right                 : 'auto',
        transform             : 'translate(-50%, -50%)'
      },

    };

    //

    return (
      <div>
		<pre>{`
	Demos:
	- No build process required (webpack, gulp, grunt, bower, whatevs other crap...)
	- uses script-tags to directly reference js libs (react, react-dom, babel, etc...)
	- uses react's Template literals (just the pre-element is not enough to preserve formatting)
	- Yay ! haha:-)
		`}
		</pre>
	  
        <button onClick={this.openModalHandler}>Show Modal</button>

        <ReactModal 
           isOpen={this.state.isModalOpen}
           contentLabel="Inline Styles Modal Example"
           style = {styleForRM}
        >
          <p>Modal text! what happens if i make this message a bit longer... ?
          Modal text! what happens if i make this message a bit longer... ?
          Modal text! what happens if i make this message a bit longer... ?
          Modal text! what happens if i make this message a bit longer... ?
          Modal text! what happens if i make this message a bit longer... ?
          </p>
          <button onClick={this.closeModalHandler}>Close Modal</button>
        </ReactModal>
		
      </div>
    );
  }
}

const props = {};

ReactDOM.render(<ModalApp101 {...props} />
  , document.getElementById('divMountPoint'))
