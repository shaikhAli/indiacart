import Car from './Car';
// import Cart from './Car';
class ChildComponent extends Car{

    render() {
        return (
            <h3>Hey its child inherited from car Class</h3>
        )
    }
}

export default ChildComponent;