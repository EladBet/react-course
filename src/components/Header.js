import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.source
        };

        this.handleSourceChange = this.handleSourceChange.bind(this);
    }

    handleSourceChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({
                src: reader.result
            });
        };

        reader.readAsDataURL(file);
    }


    render() {
        return (
            <div>
                {
                    this.props.show &&
                    <div>
                        <input
                            type="file"
                            onChange={this.handleSourceChange}
                        />
                        < img src={this.state.src}/>
                    </div>
                }
            </div>
        );
    }
};
