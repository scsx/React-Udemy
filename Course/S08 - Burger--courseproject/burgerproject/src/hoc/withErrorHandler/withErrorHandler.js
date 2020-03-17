// This file is like a factory of Class cpts that display an error
import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
    // anonymous Class, we never use it, just return it, like a Class factory which are created by withErrorHandler
    return class extends Component {
        state = {
            error: null
        };

        // was did mount; see https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/13556520
        componentWillMount() {
            // CLEAR ERROR IF NEW ONE COMES IN
            this.reqInterceptor = axios.interceptors.request.use((req) => {
                this.setState({ error: null });
                return req;
            });
            // SHOW ERROR
            // 1st argument must be returned: res => res
            this.respInterceptor = axios.interceptors.response.use(
                (res) => res,
                (error) => {
                    this.setState({ error: error });
                }
            );
        }

        // because this is a HOC (reusable) cpt we have to manage the amount of times/instances that interceptors will run and leak memory; it's like an unsubscribe
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.respInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        };

        render() {
            return (
                <Aux>
                    <Modal
                        showModal={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        <b className="text-danger">
                            {this.state.error ? this.state.error.message : null}
                        </b>
                    </Modal>
                    {/* recive target's props (even if we dont use) */}
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;
