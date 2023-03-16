import PatternTable from "../../components/PatternTable";


import "../../pages/MyPatternsPage/MyPatternsPage.css"

const MyPatternsPage = (props) => {

    
    const { patterns } = props;
    console.log('Pattern Page')
    return ( 
        <section className="my-patterns">
            <PatternTable patterns = {patterns} />
        </section>
     );
}
 
export default MyPatternsPage;