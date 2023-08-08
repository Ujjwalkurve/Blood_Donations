package com.edubridge.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String , String> response=new HashMap<String, String>();
		
		ex.getBindingResult().getAllErrors().forEach((error) ->
		{
			response.put("message", error.getDefaultMessage());
			response.put("field",((FieldError)error).getField());
			
		}
				
);
		
		return new ResponseEntity<Object>(response,HttpStatus.BAD_REQUEST);
	}
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<Map<String,String>> handleResourceNotFoundException(ResourceNotFoundException exception)
	{
		Map<String , String> response=new HashMap<String, String>();
		
		response.put("message",exception.getMessage());
		response.put("date",String.valueOf(new java.util.Date()));
		return new ResponseEntity<Map<String,String>>(response,HttpStatus.NOT_FOUND);
	}
	
	

	@ExceptionHandler(NullPointerException.class)
	public ResponseEntity<Map<String,String>> handleNullPointerException(NullPointerException exception)
	{
		Map<String , String> response=new HashMap<String, String>();
		
		response.put("message",exception.getMessage());
		response.put("date",String.valueOf(new java.util.Date()));
		return new ResponseEntity<Map<String,String>>(response,HttpStatus.BAD_REQUEST);
	}
	
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<Map<String,String>> handleGenericException(Exception exception)
	{
		Map<String , String> response=new HashMap<String, String>();
		
		response.put("message",exception.getMessage());
		response.put("date",String.valueOf(new java.util.Date()));
		return new ResponseEntity<Map<String,String>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
