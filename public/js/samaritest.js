$scope.testcall = function() {
		$http.post({
			url: "/decode",
			data: JSON.stringify('Qm9zdG9uIFVwZGF0ZQ0KDQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQkgCQ0KDQpCb3N0b24gUmVkIFNveA0KDQp2cy4gTmV3IFlvcmsgWWFua2VlcyA4LzENCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NDAvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMzMzU3JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQp2cy4gSG91c3RvbiBBc3Ryb3MgOC8xNQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ0MS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI2NTMlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCnZzLiBIb3VzdG9uIEFzdHJvcyA4LzE2DQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDQyL2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMjY1NCUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KdnMuIEhvdXN0b24gQXN0cm9zIDgvMTcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NDMvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMyNjU1JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQp2cy4gTG9zIEFuZ2VsZXMgQW5nZWxzIG9mIEFuYWhlaW0gOC8xOA0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ0NC9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI2NTYlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCnZzLiBMb3MgQW5nZWxlcyBBbmdlbHMgb2YgQW5haGVpbSA4LzE5DQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDQ1L2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMjY1NyUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KYW5kIG1hbnkgTW9yZSENCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NDYvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZjYXRlZ29yeSUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMDIlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ0KDQpUaGUgTGlvbiBLaW5nIC0gSGlnaCBkZW1hbmQhDQpCb3N0b24gT3BlcmEgSG91c2UgLSBCb3N0b24sIE1BDQoNClNlcHRlbWJlciAyMCwgMjAxNCAtIE1hdGluZWUNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NDcvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMyNzIzJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpTZXB0ZW1iZXIgMjUsIDIwMTQgLSBFdmVuaW5nDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDQ4L2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMjcyMSUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KU2VwdGVtYmVyIDI4LCAyMDE0IC0gRXZlbmluZw0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ0OS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI3MjIlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQkNCg0KTWFtbWEgTWlhIC0gSGlnaCBkZW1hbmQhDQpDaXRpIEVtZXJzb24gQ29sb25pYWwgVGhlYXRyZSAtIEJvc3RvbiwgTUENCg0KT2N0b2JlciAzMSwgMjAxNCAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NTAvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMyNzkxJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpOb3ZlbWJlciAyLCAyMDE0IC0gRXZlbmluZw0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ1MS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI3OTAlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQkNCg0KTmV3ISBCb3N0b24gQmFsbGV0IC0gU3dhbiBMYWtlIC0gU2F2ZSB1cCB0byAkMTIuMDAhDQpCb3N0b24gT3BlcmEgSG91c2UgLSBCb3N0b24sIE1BDQoNCk5vdmVtYmVyIDEsIDIwMTQgLSBFdmVuaW5nDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDUyL2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMzMxNiUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCQ0KDQpKb3NlcGggYW5kIHRoZSBBbWF6aW5nIFRlY2huaWNvbG9yIERyZWFtY29hdCAtIFNhdmUgdXAgdG8gJDE1LjUwIQ0KSGFub3ZlciBUaGVhdHJlIC0gV29yY2VzdGVyLCBNQQ0KDQpOb3ZlbWJlciAyLCAyMDE0IC0gTWF0aW5lZQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ1My9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzMxMTQlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ0KDQpBbm5pZSAtIFNhdmUgdXAgdG8gJDE1LjEwIQ0KV2FuZyBUaGVhdHJlIC0gQm9zdG9uLCBNQQ0KDQpOb3ZlbWJlciAxNiwgMjAxNCAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NTQvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMzMzE2JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0JIAkNCg0KTmV3ISBUaGUgTnV0Y3JhY2tlciAtIFNhdmUgdXAgdG8gJDIyLjAwIQ0KQm9zdG9uIE9wZXJhIEhvdXNlIC0gQm9zdG9uLCBNQQ0KDQpOb3ZlbWJlciAyOSwgMjAxNCAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NTUvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMzMzQ1JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpEZWNlbWJlciA2LCAyMDE0IC0gRXZlbmluZyAJDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDU2L2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMzM0NiUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQoJIAkNClJ1ZG9scGggVGhlIFJlZC1Ob3NlZCBSZWluZGVlcjogVGhlIE11c2ljYWwgLSBTYXZlIHVwIHRvICQxMS41MCENCkNpdGkgU2h1YmVydCBUaGVhdHJlIC0gQm9zdG9uLCBNQQ0KDQpEZWNlbWJlciAxMywgMjAxNCAtIDEwOjAwIGEubS4NCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NTcvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMzMDYxJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0NCg0KTmV3ISBBIENocmlzdG1hcyBDYXJvbCAtIFNhdmUgdXAgdG8gJDUuMDAhDQpIYW5vdmVyIFRoZWF0cmUgLSBXb3JjZXN0ZXIsIE1BDQoNCkRlY2VtYmVyIDIxLCAyMDE0IC0gTWF0aW5lZQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ1OC9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzMzNDglMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ0KDQpEaXNuZXkgb24gSWNlIC0gRnJvemVuIQ0KVEQgR2FyZGVuIC0gQm9zdG9uLCBNQQ0KDQpGZWJydWFyeSAxNCwgMjAxNSAtIDc6MDAgcC5tLg0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ1OS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzMwOTIlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCkZlYnJ1YXJ5IDE1LCAyMDE1IC0gNTowMCBwLm0uDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDYwL2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMzA5MyUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KRmVicnVhcnkgMjAsIDIwMTUgLSA3OjAwIHAubS4NCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NjEvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMzMDk0JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpGZWJydWFyeSAyMSwgMjAxNSAtIDc6MDAgcC5tLg0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ2Mi9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzMwOTUlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCkZlYnJ1YXJ5IDIyLCAyMDE1IC0gNzowMCBwLm0uDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDYzL2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMzA5NiUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCQ0KDQpNb3Rvd246IFRoZSBNdXNpY2FsIC0gSGlnaCBkZW1hbmQhDQpCb3N0b24gT3BlcmEgSG91c2UgLSBCb3N0b24NCg0KRmVicnVhcnkgNiwgMjAxNSAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NjQvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMyNzk0JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpGZWJydWFyeSAxMiwgMjAxNSAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NjUvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMyNzkzJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpGZWJydWFyeSAxNSwgMjAxNSAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NjYvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMyNzkyJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0NCg0KSXJ2aW5nIEJlcmxpbidzIFdoaXRlIENocmlzdG1hcyAtIFNhdmUgdXAgdG8gJDE3LjAwIQ0KV2FuZyBUaGVhdHJlIC0gQm9zdG9uLCBNQQ0KDQpEZWNlbWJlciAyMSwgMjAxNCAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NjcvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMzMzEzJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0JIAkJDQoNCkRpcnR5IERhbmNpbmcgLSBIaWdoIGRlbWFuZCENCkNpdGkgRW1lcnNvbiBDb2xvbmlhbCBUaGVhdHJlIC0gQm9zdG9uDQoNCkFwcmlsIDMwLCAyMDE1IC0gRXZlbmluZw0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ2OC9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI4MDIlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCk1heSAzLCAyMDE1IC0gTWF0aW5lZQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ2OS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI4MDElMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCk1heSA5LCAyMDE1IC0gRXZlbmluZw0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ3MC9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI4MDAlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ0KDQpLaW5reSBCb290cyAtIEhpZ2ggZGVtYW5kIQ0KQm9zdG9uIE9wZXJhIEhvdXNlIC0gQm9zdG9uDQoNClRoZXNlIGFyZSAyMDE1IHBlcmZvcm1hbmNlcy4NCg0KQXVndXN0IDEzLCAyMDE1IC0gRXZlbmluZw0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ3MS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI5NTElMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCkF1Z3VzdCAxNCwgMjAxNSAtIEV2ZW5pbmcNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NzIvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMyOTQwJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpBdWd1c3QgMTYsIDIwMTUgLSBFdmVuaW5nDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDczL2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMjk1MCUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQoNCk5ld3NpZXMgLSBIaWdoIGRlbWFuZCENCkJvc3RvbiBPcGVyYSBIb3VzZSAtIEJvc3Rvbg0KDQpKdW5lIDI2LCAyMDE1IC0gRXZlbmluZw0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ3NC9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDExJTI2cHJvZElEJTNEMzI3OTklMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCkp1bmUgMjgsIDIwMTUgLSBFdmVuaW5nDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDc1L2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMjc5OCUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQoNCkZvciBhIGNvbXBsZXRlIGxpc3Qgc2hvd3MsIHBsZWFzZSB2aXNpdCB0aGUgQm9zdG9uICBzZWN0aW9uIG9mIHRoZWF0cmUgYW5kIGV2ZW50cyBwYWdlLg0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ3Ni9odHRwJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGc3ViY2F0ZWdvcnklMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZzdWJjYXRJRCUzRDI3NCUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQlMjZ1dG0lNUZwcm9kJTNEb3RoZXJzaG93cw0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0JIAkNCg0KQXR0cmFjdGlvbnMNCg0KQ2Fub2JpZSBMYWtlIFBhcmsJIAkNCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NzcvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QyMSUyNnByb2RJRCUzRDMyNjgyJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpCb3N0b24gQ2l0eVBBU1MgDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDc4L2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMjEyNiUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KV2F0ZXIgQ291bnRyeSANCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0NzkvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QyMSUyNnByb2RJRCUzRDMyNjQ4JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpCcm9tbGV5DQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDgwL2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMjElMjZwcm9kSUQlM0QzMjg0NSUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KU2l4IEZsYWdzIE5ldyBFbmdsYW5kIFNpbmdsZSBEYXkgVGlja2V0DQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDgxL2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMjElMjZwcm9kSUQlM0QzMjY0MSUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KRHVjayBUb3VycyBTYXZlIHVwIHRvICQ1Ljc5IQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ4Mi9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDIxJTI2cHJvZElEJTNEMzMzMjclMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNClNvdXRod2ljaydzIFpvbwkgCQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ4My9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDIxJTI2cHJvZElEJTNEMTUwMjAlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCktpbmcgUmljaGFyZCdzIEZhaXINCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0ODQvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRmNhdGVnb3J5SUQlM0QxMSUyNnByb2RJRCUzRDMxNjMwJTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpOZXcgRW5nbGFuZCBBcXVhcml1bQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ4NS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGY2F0ZWdvcnlJRCUzRDIxJTI2cHJvZElEJTNEMzE1NDQlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCkxha2UgQ29tcG91bmNlCSAJDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDg2L2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGcHJvZHVjdERldGFpbHMlMkVjZm0lM0ZjYXRlZ29yeUlEJTNEMTElMjZwcm9kSUQlM0QzMjc2NSUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KQ2xpY2sgaGVyZSBmb3IgYSBjb21wbGV0ZSBsaXN0IG9mIEJvc3RvbiBBdHRyYWN0aW9ucy4NCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0ODcvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZzdWJjYXRlZ29yeSUyRWNmbSUzRmNhdGVnb3J5SUQlM0QyMSUyNnN1YmNhdElEJTNEMjY0NyUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCSAJIAkNCg0KQ2xpY2sgSEVSRSB0byB2aWV3IGEgY29tcGxldGUgbGlzdCBvZiBNb3ZpZSBFLVRpY2tldHMhDQpodHRwOi8vdC5zZW5kMjR3ZWIuY29tL3RyYWNrL2NsaWNrLzE3Ojc5MzA6MjY2NDAzNzpFNzQyOUI0RC02ODQ0LTQwRUQtODEzRS0wMTc3NzQwMzlDN0IvMzIyNDg4L2h0dHBzJTNBJTJGJTJGd3d3JTJFd29ya2luZ2FkdmFudGFnZSUyRWNvbSUyRnByb2R1Y3RzJTJGc3ViY2F0ZWdvcnklMkVjZm0lM0ZzdWJjYXRJRCUzRDI2ODIlMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQkgCQ0KCQ0KVG9wIFdlYiBEZWFscw0KDQpWZXJpem9uIFdpcmVsZXNzIDUwJSBPZmYgTmV3IFNtYXJ0cGhvbmVzIGF0IFZlcml6b24gV2lyZWxlc3MhIE5ldyAyeXIgYWN0aXZhdGlvbiByZXEnZC4gRnJlZSBPdmVybmlnaHQgU2hpcHBpbmcsIDcvMjcuCQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ4OS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGcHJvZElEJTNEMzIyMTklMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQoNCkFUJlQJVS1mYW1pbHkgVFYgKyBJbnRlcm5ldCBFbGl0ZSArIFZvaWNlIDIwMDogJDc5L21vICsgJDI1MCBpbiByZXdhcmQgY2FyZHMsIHRocnUgNy8yNiENCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0OTAvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRnByb2RJRCUzRDMyOTg3JTI2dXRtJTVGc291cmNlJTNEZU5ld3MlMjZ1dG0lNUZtZWRpdW0lM0RlbWFpbCUyNnV0bSU1RmNhbXBhaWduJTNEQm9zdG9uTmV3czA3MjgxNA0KDQpIZXJiYWxpZmUgUmVjZWl2ZSAyMCUgb2ZmIGFsbCBIZXJiYWxpZmUgcHJvZHVjdHMhCQ0KaHR0cDovL3Quc2VuZDI0d2ViLmNvbS90cmFjay9jbGljay8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCLzMyMjQ5MS9odHRwcyUzQSUyRiUyRnd3dyUyRXdvcmtpbmdhZHZhbnRhZ2UlMkVjb20lMkZwcm9kdWN0cyUyRnByb2R1Y3REZXRhaWxzJTJFY2ZtJTNGcHJvZElEJTNEMzMxNyUyNnV0bSU1RnNvdXJjZSUzRGVOZXdzJTI2dXRtJTVGbWVkaXVtJTNEZW1haWwlMjZ1dG0lNUZjYW1wYWlnbiUzREJvc3Rvbk5ld3MwNzI4MTQNCg0KQmx1ZSBOaWxlIDEwJSBvZmYgamV3ZWxyeS4NCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0OTIvaHR0cHMlM0ElMkYlMkZ3d3clMkV3b3JraW5nYWR2YW50YWdlJTJFY29tJTJGcHJvZHVjdHMlMkZwcm9kdWN0RGV0YWlscyUyRWNmbSUzRnByb2RJRCUzRDI4NzklMjZ1dG0lNUZzb3VyY2UlM0RlTmV3cyUyNnV0bSU1Rm1lZGl1bSUzRGVtYWlsJTI2dXRtJTVGY2FtcGFpZ24lM0RCb3N0b25OZXdzMDcyODE0DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0NCg0KQmVjb21lIG91ciBmYW4gb24gRmFjZWJvb2sgZm9yIGV4Y2x1c2l2ZSBvZmZlcnMhIEZpbmQgZ3JlYXQgZGVhbHMgb24gTW92aWUgVGlja2V0cywgdXBkYXRlcyBvbiBldmVudHMsIG5ldyBwcm9kdWN0cyBhbmQgbW9yZSENCmh0dHA6Ly90LnNlbmQyNHdlYi5jb20vdHJhY2svY2xpY2svMTc6NzkzMDoyNjY0MDM3OkU3NDI5QjRELTY4NDQtNDBFRC04MTNFLTAxNzc3NDAzOUM3Qi8zMjI0OTMvaHR0cHMlM0ElMkYlMkZ3d3clMkVmYWNlYm9vayUyRWNvbSUyRmVtcGxveWVlc2F2aW5ncw0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0NCg0KV2FudCB0byBiZSBub3RpZmllZCBvZiBtZW1iZXIgc2F2aW5ncyBvbiBhcHBhcmVsIGFuZCBhY2Nlc3NvcmllcywgZWxlY3Ryb25pY3MsIHRyYXZlbCBhbmQgbW9yZT8gVXBkYXRlIHlvdXIgTmV3c2xldHRlciBTdWJzY3JpcHRpb25zIChodHRwczovL3d3dy53b3JraW5nYWR2YW50YWdlLmNvbS9zdWJzY3JpcHRpb25zLmNmbT8pIG9ubGluZSBub3cgYW5kIHJlY2VpdmUgZW1haWxzIHdpdGggc29tZSBvZiB0aGUgYmVzdCBkZWFscyBmcm9tIG91ciBTaG9wcGluZyBQYXJ0bmVycyAoaHR0cDovL3d3dy53b3JraW5nYWR2YW50YWdlLmNvbS9wcm9kdWN0cy9jYXRlZ29yeS5jZm0_Y2F0ZWdvcnlJRD0yKS4NCg0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0NCg0KQ2xpY2sgaGVyZSB0byB1bnN1YnNjcmliZTogaHR0cDovL3dvcmtpbmdhZHZhbnRhZ2Uuc2VuZDI0d2ViLmNvbS9pbmRleC5jZm0vZXZlbnQvdW5zdWJzY3JpYmUvdC8xNzo3OTMwOjI2NjQwMzc6RTc0MjlCNEQtNjg0NC00MEVELTgxM0UtMDE3Nzc0MDM5QzdCL2wvMzIyNDk0')
		}).success(function(resp) {
			alert(JSON.stringify(resp));
		})
	}