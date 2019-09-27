<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE TTMAKER SYSTEM "ttmaker60.dtd">
<?ANALYZE?><TTMAKER Version="6.0"><NEWTREE Filename="C:\Documents and Settings\mss164\Desktop\Samba\lab4\Employee.mtt"><ROOT SimpleTypeName="DTD" SetUpProperties="DEFAULT" SetUpComponents="DELETE" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ROOT>
<CATEGORY SimpleTypeName="Misc" CategoryParent="DTD" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<ITEM SimpleTypeName="Comment" CategoryOrItemParent="Misc DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_COMMENT></XML_COMMENT><XPATH>xml-comment</XPATH></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="PI" CategoryOrItemParent="Misc DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_PI></XML_PI><XPATH>xml-pi</XPATH></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="PCDATA" CategoryOrItemParent="Misc DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_PCDATA></XML_PCDATA><XPATH>xml-pcdata</XPATH></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<CATEGORY SimpleTypeName="Prolog" CategoryParent="DTD" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<ITEM SimpleTypeName="version" CategoryOrItemParent="Prolog DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ATTRIBUTE><name>version</name><uri>http://www.w3.org/2001/XMLSchema</uri><form></form><typename>string</typename><typeuri>http://www.w3.org/2001/XMLSchema</typeuri><basetypename>anySimpleType</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><whiteSpace>preserve</whiteSpace></XML_ATTRIBUTE></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="encoding" CategoryOrItemParent="Prolog DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ATTRIBUTE><name>encoding</name><uri>http://www.w3.org/2001/XMLSchema</uri><form></form><typename>string</typename><typeuri>http://www.w3.org/2001/XMLSchema</typeuri><basetypename>anySimpleType</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><whiteSpace>preserve</whiteSpace></XML_ATTRIBUTE></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="standalone" CategoryOrItemParent="Prolog DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ATTRIBUTE><name>standalone</name><uri>http://www.w3.org/2001/XMLSchema</uri><form></form><typename>string</typename><typeuri>http://www.w3.org/2001/XMLSchema</typeuri><basetypename>anySimpleType</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><whiteSpace>preserve</whiteSpace></XML_ATTRIBUTE></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<GROUP SimpleTypeName="Decl" CategoryOrGroupParent="Prolog DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_XMLDECL></XML_XMLDECL><XPATH>xml-prolog</XPATH></ASCTYPE_XML>
<Unordered><UnorderedComponent><RelativeTypeName>version</RelativeTypeName>
<Range Min="1" Max="1"/>
</UnorderedComponent>
<UnorderedComponent><RelativeTypeName>encoding</RelativeTypeName>
<Range Min="0" Max="1"/>
</UnorderedComponent>
<UnorderedComponent><RelativeTypeName>standalone</RelativeTypeName>
<Range Min="0" Max="1"/>
</UnorderedComponent>
</Unordered>
</GROUP>
<CATEGORY SimpleTypeName="DOCTYPE" CategoryParent="Prolog DTD" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<ITEM SimpleTypeName="rootname" CategoryOrItemParent="DOCTYPE Prolog DTD" partition="NO" OrderSubtypes="ADDLAST"><TypeSyntax><INITIATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;WSP&gt;</LiteralValue>
</Literal>
</INITIATOR>
</TypeSyntax>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="url" CategoryOrItemParent="DOCTYPE Prolog DTD" partition="NO" OrderSubtypes="ADDLAST"><TypeSyntax><INITIATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;WSP&gt;&lt;ANYQUOTE&gt;</LiteralValue>
</Literal>
</INITIATOR>
<TERMINATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;QUOTE&gt;NYQUOTE</LiteralValue>
</Literal>
</TERMINATOR>
</TypeSyntax>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="identifier" CategoryOrItemParent="DOCTYPE Prolog DTD" partition="NO" OrderSubtypes="ADDLAST"><TypeSyntax><INITIATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;WSP&gt;&lt;ANYQUOTE&gt;</LiteralValue>
</Literal>
</INITIATOR>
<TERMINATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;QUOTE&gt;NYQUOTE</LiteralValue>
</Literal>
</TERMINATOR>
</TypeSyntax>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="content" CategoryOrItemParent="DOCTYPE Prolog DTD" partition="NO" OrderSubtypes="ADDLAST"><TypeSyntax><INITIATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;OWSP&gt;[NYQUOTE</LiteralValue>
</Literal>
</INITIATOR>
<TERMINATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>]O</LiteralValue>
</Literal>
</TERMINATOR>
</TypeSyntax>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<GROUP SimpleTypeName="SYSTEM" CategoryOrGroupParent="DOCTYPE Prolog DTD" OrderSubtypes="ADDLAST"><TypeSyntax><INITIATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;OWSP&gt;SYSTEMTE</LiteralValue>
</Literal>
</INITIATOR>
</TypeSyntax>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>url</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>content</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="PUBLIC" CategoryOrGroupParent="DOCTYPE Prolog DTD" OrderSubtypes="ADDLAST"><TypeSyntax><INITIATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;OWSP&gt;PUBLICTE</LiteralValue>
</Literal>
</INITIATOR>
</TypeSyntax>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>identifier</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>url</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>content</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Format" CategoryOrGroupParent="DOCTYPE Prolog DTD" OrderSubtypes="ADDLAST"><Choice><ChoiceComponent><RelativeTypeName>content</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>SYSTEM</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>PUBLIC</RelativeTypeName>
</ChoiceComponent>
</Choice>
</GROUP>
<GROUP SimpleTypeName="Decl" CategoryOrGroupParent="DOCTYPE Prolog DTD" OrderSubtypes="ADDLAST"><TypeSyntax><INITIATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;OWSP&gt;&lt;!DOCTYPE</LiteralValue>
</Literal>
</INITIATOR>
<TERMINATOR><Literal IgnoreCase="NO"><Western CharSet="NATIVE"/>
<LiteralValue>&lt;OWSP&gt;&gt;!DOCTYP</LiteralValue>
</Literal>
</TERMINATOR>
</TypeSyntax>
<Sequence partition="NO"><Explicit><Delimited location="INFIX"><DelimiterLiteral><Western CharSet="NATIVE"/>
<LiteralValue>&lt;WSP&gt;</LiteralValue>
</DelimiterLiteral>
</Delimited>
</Explicit>
<SequenceComponent><RelativeTypeName>rootname</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Format</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<CATEGORY SimpleTypeName="Attr" CategoryParent="DTD" OrderSubtypes="ASCENDING"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<CATEGORY SimpleTypeName="Element" CategoryParent="DTD" OrderSubtypes="ASCENDING"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<ITEM SimpleTypeName="City" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>City</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="Country" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>Country</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<CATEGORY SimpleTypeName="Employ" CategoryParent="Element DTD" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<CATEGORY SimpleTypeName="Attr" CategoryParent="Employ Element DTD" OrderSubtypes="ASCENDING"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<ITEM SimpleTypeName="xmlns" CategoryOrItemParent="Attr Employ Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ATTRIBUTE><name>xmlns</name><form>unqualified</form><typename>string</typename><typeuri>http://www.w3.org/2001/XMLSchema</typeuri><basetypename>anySimpleType</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><whiteSpace>preserve</whiteSpace></XML_ATTRIBUTE></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<GROUP SimpleTypeName="AttrList" CategoryOrGroupParent="Employ Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ATTRIBUTELIST></XML_ATTRIBUTELIST><XPATH>xml-attributeList</XPATH></ASCTYPE_XML>
<Unordered><UnorderedComponent><RelativeTypeName>xmlns Attr</RelativeTypeName>
<Range Min="0" Max="1"/>
</UnorderedComponent>
</Unordered>
</GROUP>
<CATEGORY SimpleTypeName="Comp" CategoryParent="Employ Element DTD" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<GROUP SimpleTypeName="Seq" CategoryOrGroupParent="Comp Employ Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>ElemDecl Employee</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="ElemDecl" CategoryOrGroupParent="Employ Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>Employ</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>anyType</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>AttrList</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq Comp</RelativeTypeName>
<Range Min="0" Max="S"/>
</SequenceComponent>
</Sequence>
</GROUP>
<CATEGORY SimpleTypeName="Employee" CategoryParent="Element DTD" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<CATEGORY SimpleTypeName="Comp" CategoryParent="Employee Element DTD" OrderSubtypes="ADDLAST"><Sequence partition="NO"><Implicit/></Sequence>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</CATEGORY>
<GROUP SimpleTypeName="Seq111" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeNumber</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq211" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeFirstName</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq121" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeLastName</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq221" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeDeptNumber</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq112" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeTitle</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq212" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeSalary</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq122" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeAddress1</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq222" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>EmployeeAddress2</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq11" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>City</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq21" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>State</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq12" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>Zip</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="Seq22" CategoryOrGroupParent="Comp Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_CONTENT></XML_CONTENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>Country</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<GROUP SimpleTypeName="ElemDecl" CategoryOrGroupParent="Employee Element DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>Employee</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>anyType</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>Seq111 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq211 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq121 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq221 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq112 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq212 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq122 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq222 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq11 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq21 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq12 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Seq22 Comp</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
</Sequence>
</GROUP>
<ITEM SimpleTypeName="EmployeeAddress1" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeAddress1</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="EmployeeAddress2" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeAddress2</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="EmployeeDeptNumber" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeDeptNumber</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="EmployeeFirstName" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeFirstName</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="EmployeeLastName" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeLastName</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="EmployeeNumber" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeNumber</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="EmployeeSalary" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeSalary</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="EmployeeTitle" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>EmployeeTitle</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="State" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>State</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<ITEM SimpleTypeName="Zip" CategoryOrItemParent="Element DTD" partition="NO" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_ELEMENT><name>Zip</name><abstract>false</abstract><form></form><nillable>false</nillable><typename></typename><typeuri></typeuri><mixed>false</mixed><basetypename>string</basetypename><basetypeuri>http://www.w3.org/2001/XMLSchema</basetypeuri><processContents>skip</processContents></XML_ELEMENT></ASCTYPE_XML>
<CharTextWestern><Size Min="0" Max="S"/>
<Western CharSet="NATIVE"/>
<ValueRestrictions IgnoreCase="NO" Rule="INCLUDE"></ValueRestrictions>
</CharTextWestern>
</ITEM>
<GROUP SimpleTypeName="Global" CategoryOrGroupParent="DTD" OrderSubtypes="ASCENDING"><ASCTYPE_XML><XML_BODY></XML_BODY><XPATH>xml-body</XPATH></ASCTYPE_XML>
<Choice><ChoiceComponent><RelativeTypeName>ElemDecl Employ Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeNumber Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeFirstName Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeLastName Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeDeptNumber Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeTitle Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeSalary Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeAddress1 Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>EmployeeAddress2 Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>City Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>State Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>Zip Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>Country Element</RelativeTypeName>
</ChoiceComponent>
<ChoiceComponent><RelativeTypeName>ElemDecl Employee Element</RelativeTypeName>
</ChoiceComponent>
</Choice>
</GROUP>
<GROUP SimpleTypeName="Doc" CategoryOrGroupParent="DTD" OrderSubtypes="ADDLAST"><ASCTYPE_XML><XML_DOCUMENT><output_encoding>UTF-16</output_encoding><build_prolog>true</build_prolog><preserve_doctype>true</preserve_doctype><elementFormDefault>null</elementFormDefault><attributeFormDefault>null</attributeFormDefault><schema_encoding>UTF-8</schema_encoding></XML_DOCUMENT><XPATH>xml-document</XPATH></ASCTYPE_XML>
<Sequence partition="NO"><Implicit/><SequenceComponent><RelativeTypeName>Decl Prolog</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Decl DOCTYPE Prolog</RelativeTypeName>
<Range Min="0" Max="1"/>
</SequenceComponent>
<SequenceComponent><RelativeTypeName>Global</RelativeTypeName>
<Range Min="1" Max="1"/>
</SequenceComponent>
</Sequence>
<DocumentType Type="XML"><Metadata>DTD</Metadata>
<Location>Employee.dtd</Location>
</DocumentType>
</GROUP>
</NEWTREE>
</TTMAKER>
