package com.trinitstechnologies.payroll.exception;

/**
 * @author Sudhakar.Badugu
 * 30-09-2022
 */
public class UnAuthorizedException extends RuntimeException{

    public UnAuthorizedException(){
        super();
    }

    public UnAuthorizedException(String message){
        super(message);
    }
}
