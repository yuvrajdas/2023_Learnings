
import React,{Component} from "react"; 
export default class __5PropsInClassComponent extends Component{

    constructor(){
        super();
    }

    render(){
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        return(
            <>
                <p>Passing Props to the class Component</p>
                <div>
                    <p>Props Datas are</p>
                    <div>
                        {this.props.details.name+" " }
                        {this.props.details.prof+" " }
                        {this.props.details.epx+" " }
                        {this.props.details.city }
                    </div>
                </div>
            </>
        )
    }
}