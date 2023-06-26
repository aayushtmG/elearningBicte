const introduction = `
<h1>Introduction</h1><h2>What is java?</h2><p>Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.</br>Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its namewas Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.</br> <b>Platform:</b> Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.</p>

<h2>Java Example</h2>
<p>Let&#39;s have a quick look at Java programming example. A simple code example:
<pre>
<code>
    1. class Simple{  
    2.     public static void main(String args[]){  
    3.      System.out.println(&quot;Hello Java&quot;);  
    4.     }  
    5. }  
</code></pre>
</p>
<h2>History of Java</h2>
<p>The history of Java is very interesting. Java was originally designed for interactive television, but it was too advanced technology for the digital cable television industry at the time. The history of Java starts with the Green Team. Java team members (also known as Green Team), initiated this project to develop a language for digital devices such as set-top boxes, televisions, etc.However, it was best suited for internet programming. Later, Java technology was incorporated by Netscape.</p>
<p>The principles for creating Java programming were &quot;Simple, Robust, Portable, Platform-
independent, Secured, High Performance, Multithreaded, Architecture Neutral, Object-
Oriented, Interpreted, and Dynamic&quot;. Java was developed by James Gosling, who is
known as the father of Java, in 1995. James Gosling and his team members started the
project in the early &#39;90s.</p>
<h2>Features of Java</h2>
<p>The primary objective of Java programming language creation was to make it portable,
simple and secure programming language. Apart from this, there are also some
excellent features which play an important role in the popularity of this language. The
features of Java are also known as Java buzzwords.<br>A list of the most important features of the Java language is given below:</p>
<ul>
<li>Simple</li>
<li>Object-Oriented</li>
<li>Portable</li>
<li>Platform independent</li>
<li>Secured</li>
<li>Robust</li>
<li>Architecture neutral</li>
<li>Interpreted</li>
<li>High Performance</li>
<li>Multithreaded</li>
<li> Distributed</li>
<li> Dynamic</li> 
</ul>
<h2>JDK</h2>
<p>JDK is an acronym for Java Development Kit. The Java Development Kit (JDK) is a
software development environment which is used to develop Java applications
and applets. It physically exists. It contains JRE + development tools.</p>
<p>JDK is an implementation of any one of the below given Java Platforms released by
Oracle Corporation:</p>
<ul>
<li>Standard Edition Java Platform</li>
<li>Enterprise Edition Java Platform</li>
<li>Micro Edition Java Platform</li>
</ul>
<h2>JRE</h2>
<p>JRE is an acronym for Java Runtime Environment. It is also written as Java RTE. The
Java Runtime Environment is a set of software tools which are used for developing Java
applications. It is used to provide the runtime environment. It is the implementation of
JVM. It physically exists. It contains a set of libraries + other files that JVM uses at
runtime.</p>
<p>The implementation of JVM is also actively released by other companies besides Sun
Micro Systems.</p>
<h2>JVM</h2>
<p>JVM (Java Virtual Machine) is an abstract machine. It is called a virtual machine
because it doesn&#39;t physically exist. It is a specification that provides a runtime
environment in which Java bytecode can be executed. It can also run those programs
which are written in other languages and compiled to Java bytecode. </p>
<p>JVMs are available for many hardware and software platforms. JVM, JRE, and JDK are
platform dependent because the configuration of each OS is different from each other.
However, Java is platform independent. There are three notions of the
JVM: specification, implementation, and instance.</p>
<p>The JVM performs the following main tasks:</p>
<ul>
<li>Loads code</li>
<li>Verifies code</li>
<li>Executes code</li>
<li>Provides runtime environment</li>
</ul>
`

function loadContent(topic) {
  const contentContainer = document.querySelector(".topic-content")

  if (topic == "introduction") {
    contentContainer.innerHTML = introduction
  } else {
    console.log("dont know")
  }
}
