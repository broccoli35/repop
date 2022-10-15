import { useNavigate } from "react-router-dom";
import container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import col from 'react-bootstrap/col';
import button from 'react-bootstrap/Button';


    const RecomendationPage = () => {
   
    return ( 
    
    <div className="container">
        <h1>Your optimized build!</h1>
            
        <div className="row align-items-center align-self-start">
            <div className="col-4">
                <img src="pc_gamer.jpg" className='img-ranking'/>
            </div>
            <div className="col-8">
                <h3 className="mb-5">Components</h3>
                <div className="componentes">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="intel.jpg" className="img-ranking"/>
                                </div>
                                <div className="flex-grow-1 ms-3">INTEL CORE I7-12700F 12-CORE</div>
                                <div className="flex-grow-0 ms-3">$359</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="nvidia.jpg" className="img-recomendacion"/>
                                </div>
                                <div className="flex-grow-1 ms-3">NVIDIA GEFORCE RTX 3070 8GB (VR READY)</div>
                                <div className="flex-grow-0 ms-3">$679</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="ddram.jpg"
                                        className="img-recomendation"/>
                                </div>
                                <div className="flex-grow-1 ms-3">16GB DDR4 DUAL CHANNEL</div>
                                <div className="flex-grow-0 ms-3">$69</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="nvme.jpg"
                                        className="img-recomendacion"/>
                                </div>
                                <div className="flex-grow-1 ms-3">1TB NVME M.2</div>
                                <div className="flex-grow-0 ms-3">$99</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="master_liquid.jpg"
                                        className="img-recomendacion"/>
                                </div>
                                <div className="flex-grow-1 ms-3">CM MASTERLIQUID ML24OL</div>
                                <div className="flex-grow-0 ms-3">$89</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="fans.jpg"
                                        className="img-recomendacion"/>
                                </div>
                                <div className="flex-grow-1 ms-3">QTY 4X CM MASTERFANS RGB</div>
                                <div className="flex-grow-0 ms-3">$29</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="pc_gamer.jpg"
                                        className="img-recomendacion"/>
                                </div>
                                <div className="flex-grow-1 ms-3">COOLER MASTER TD500 RGB</div>
                                <div className="flex-grow-0 ms-3">$99</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="power_suply.jpg"
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">700W ATX 80 PLUS GOLD</div>
                                <div className="flex-grow-0 ms-3">$79</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="mother_board.jpg"
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">ASUS PRIME B660M-A | INTEL</div>
                                <div className="flex-grow-0 ms-3">$149</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="intel.jpg"
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">WIRELLESS 802.11AC</div>
                                <div className="flex-grow-0 ms-3">$29</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="intel.jpg"
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">WINDOWS 11 HOME + USB RECOVERY</div>
                                <div className="flex-grow-0 ms-3">$120</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                        <div className="col">
                            <div className="d-fle   x align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="intel.jpg"
                                        className="img-fluid components"/>
                                </div>
                                <div className="flex-grow-1 ms-3">BUILD + SETUP + TESTING + WARRANTY</div>
                                <div className="flex-grow-0 ms-3">$99</div>
                            </div>
                            <hr className="my-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card mt-4 ms-5 preci">
            <div className="card-body preci">
                <div className="row">
                    <div className="col">
                        Components price
                        <p className="mt-3">$1899</p>
                    </div>
                    <div className="col">
                        Build fee
                        <p className="mt-3">$99</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    
}

export default RecomendationPage;